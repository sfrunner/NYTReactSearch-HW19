var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/nytreact');

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
        else
            var JSONresponse = JSON.parse(json.body);
            console.log(JSONresponse.response.docs);
            res.json(JSONresponse.response.docs);
    });
});


module.exports = router;