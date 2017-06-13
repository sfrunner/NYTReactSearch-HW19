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
    getResults: function(){
        return axios.get("/searchresults")
    }
}


module.exports = Helpers;