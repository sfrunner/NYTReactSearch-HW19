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
    }
}


module.exports = Helpers;