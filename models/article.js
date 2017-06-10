var mongoose = require("mongoose");
var moment = require("moment");

var article = mongoose.Schema({
    title:{
        type:String
    },
    dateTimeArticle:{
        type:Date
    },
    dateInserted:{
       type: Date,
       default: moment().format()
    },
    url:{
        type: String
    }
});

var Article = mongoose.model("Article", article);

module.exports = Article;