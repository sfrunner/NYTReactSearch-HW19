var React = require("react");
var ReactBootstrap = require("react-bootstrap");

//Retrieve helpers
var helpers = require("../helpers.js");

var Results = React.createClass({
    saveArticle: function(event){
        console.log(event.target.id)
        var articleNumber = event.target.id;
        var arrayIndex = parseInt(articleNumber.replace("article-",""))-1;
        helpers.sendArticle(this.props.results[arrayIndex]);
    },
    illustrateResults: function(){
        if(this.props.results != ""){
            return(
                <div>
                    <p>
                        {this.props.results[0].headline.main}
                        <button id="article-1" onClick={this.saveArticle}>
                            Save
                        </button>
                    </p>
                    <p>
                        {this.props.results[1].headline.main}
                        <button id="article-2" onClick={this.saveArticle}>
                            Save
                        </button>
                    </p>
                    <p>
                        {this.props.results[2].headline.main}
                        <button id="article-3" onClick={this.saveArticle}>
                            Save
                        </button>
                    </p>
                    <p>
                        {this.props.results[3].headline.main}
                        <button id="article-4" onClick={this.saveArticle}>
                            Save
                        </button>
                        </p>
                        <p>
                        {this.props.results[4].headline.main}
                        <button id="article-5" onClick={this.saveArticle}>
                            Save
                        </button>
                    </p>
                </div>
            ) 
        }
    },
    render: function(){
        var Jumbotron = ReactBootstrap.Jumbotron;
        return(
            <Jumbotron>
                {this.illustrateResults()}
            </Jumbotron>
       )
    }
});    

module.exports = Results;