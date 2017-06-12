var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var moment = require("moment");

mongoose.connect('mongodb://localhost/nytreact');
var Article = require("../models/article.js")
//New York Times Wrapper
var request = require("request");
var NYTAPIKEY = "1b8740592e7f4012ab30a555827c0c58";
router.get("/", function(req,res){
    res.render("searchNYT");
});

router.post("/searchlog", function(req,res){
    console.log(req.body);
    request("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ req.body.topic + "&begin_date=" + req.body.startYear + "0101&end_date=" + req.body.endYear + "1231&api-key=" + NYTAPIKEY, function (err, json) {
        if(err)
            console.log(err)
        else{
            console.log(req.body.startYear);
            console.log(json);
            var JSONresponse = JSON.parse(json.body);
            console.log(JSONresponse.response.docs);
            res.json(JSONresponse.response.docs);

            //Clear and Save to Database
            Article.remove({});
            for(var i = 0; i<JSONresponse.response.docs.length; i++){
                Article.create({
                    title:JSONresponse.response.docs[i].headline.main,
                    dateTimeArticle: JSONresponse.response.docs[i].pub_date,
                    url: JSONresponse.response.docs[i].web_url,
                    dateInserted: moment().format()
                }, function(err, response){
                    if (err) 
                        console.log(err)
                });
            }
        }
    });
});

router.get("/searchresults", function(req,res){
    Article.find({}, function(err,response){
        res.json(response);
    });
});


module.exports = router;