var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var moment = require("moment");
var Article = require("../models/article.js")
//New York Times Info
var request = require("request");
var NYTAPIKEY = "1b8740592e7f4012ab30a555827c0c58";

//localhost DB connect
//mongoose.connect('mongodb://localhost/nytreact');

//Herokuy DB Connect
mongoose.connect(process.env.MONGODB_URI);


//Render Initial React App via Handlebars
router.get("/", function(req,res){
    res.render("searchNYT");
});

//Post Route to Save Article in DB
router.post("/savearticle", function(req,res){
    Article.create({
        title:req.body.headline.main,
        dateTimeArticle: req.body.pub_date,
        url: req.body.web_url,
        dateInserted: moment().format("MMM Do YYYY")
    }, function(err, response){
        if (err){
            console.log(err);
        }
        else{
            console.log("Article Inserted");
        }   
    });
});

//Post Route for NYT Query
router.post("/searchlog", function(req,res){
    console.log(req.body);
    request("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ req.body.topic + "&begin_date=" + req.body.startYear + "0101&end_date=" + req.body.endYear + "1231&api-key=" + NYTAPIKEY, function (err, json) {
        if(err)
            console.log(err)
        else{
            var JSONresponse = JSON.parse(json.body);
            res.json(JSONresponse.response.docs);
        }
    });
});

//Route to Retrieve Saved Articles
router.get("/savedarticles", function(req,res){
    Article.find({}, function(err,response){
        if(err){
            console.log(err);
        }
        else{
            res.json(response);
        }
    });
});

//Route to Delete Saved Articles
router.delete("/deletearticle/:articleId", function(req,res){
    Article.findByIdAndRemove(req.params.articleId, function(err,response){
        if(err){
            console.log(err);
        }
        else{
            console.log("Article Deleted");
        }
    });
});


module.exports = router;