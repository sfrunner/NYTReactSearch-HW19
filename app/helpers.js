var axios = require("axios");

var Helpers = {
    getSearch: function(topic, startYear, endYear){
        return (axios.post('/searchlog', {
            topic: topic,
            startYear: startYear,
            endYear: endYear
        })
        )
    },
    sendArticle: function(articleObject){
        return(axios.post("/savearticle", articleObject));
    },
    getHistory: function(){
        return(axios.get("/savedarticles"))
    },
    deleteArticle: function(articleId){
        axios.delete("/deletearticle/" + articleId);
    }
}


module.exports = Helpers;