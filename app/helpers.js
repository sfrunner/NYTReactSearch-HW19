var axios = require("axios");

var Helpers = {
    getSearch: function(topic, startYear, endYear){
        axios.post('/searchlog', {
            topic: topic,
            startYear: startYear,
            endYear: endYear
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

module.exports = Helpers;