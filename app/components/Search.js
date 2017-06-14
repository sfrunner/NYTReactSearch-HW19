var React = require("react");
var ReactBootstrap = require("react-bootstrap");

//Retrieve helpers
var helpers = require("../helpers.js");

var Search = React.createClass({
    deleteArticle: function(event){
        var articleId = event.target.id;
        helpers.deleteArticle(articleId);
    },
    illustrateSavedArticles: function(){
        if(this.props.savedArticles != ""){
            return this.props.savedArticles.data.map(t => 
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong>
                            Title:
                        </strong>
                         {t.title}  
                        <strong>
                             Date Saved:
                        </strong> 
                        {t.dateInserted} 
                        <button className="btn" id={t._id} onClick={this.deleteArticle}>
                            Delete
                        </button>
                    </div>
                    <div className="panel-body">
                        <a href={t.url} target="_blank">
                            {t.url}
                        </a>
                    </div>
                </div>
            )   
        } 
    },
    render:function(){
         var Jumbotron = ReactBootstrap.Jumbotron;
        return(
            <Jumbotron>
                {this.illustrateSavedArticles()}
            </Jumbotron>
        )
    }
});

module.exports = Search;