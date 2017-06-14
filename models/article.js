var mongoose = require("mongoose");

var article = mongoose.Schema({
    title:{
        type:String
    },
    dateTimeArticle:{
        type:Date
    },
    dateInserted:{
       type: String,
    },
    url:{
        type: String
    }
});

var Article = mongoose.model("Article", article);

module.exports = Article;