var React = require("react");
var ReactBootstrap = require("react-bootstrap");

//Retrieve helpers
var helpers = require("../helpers.js");
var Results = require("./Results.js");
var Search = require("./Search.js")

var Main = React.createClass({
    getInitialState: function(){
        return {topic:"",startYear:"",endYear:"", results: [], savedArticles:[]}
    },
    onChangeTopic:function(event){
        this.setState({topic:event.target.value});
    },
    onChangeStartYear:function(event){
        this.setState({startYear:event.target.value});
    },
    onChangeEndYear:function(event){
        this.setState({endYear:event.target.value});
    },
    onSubmit: function(){
        if(this.state.topic != "" && this.state.startYear != "" && this.state.endYear != ""){
        var resultResponse = "";
        helpers.getSearch(this.state.topic,this.state.startYear,this.state.endYear)
        .then(function(responsePOST){
            this.setState(
                {
                    results:[responsePOST.data[0],responsePOST.data[1],responsePOST.data[2],responsePOST.data[3],responsePOST.data[4]]
                });
            }.bind(this));
        }
    },
    //Property to Refresh Saved Articles
     retrieveSavedArticles:function(){
        helpers.getHistory()
        .then(function(response){
            this.setState({savedArticles: response})
        }.bind(this))
    },
    render: function(){
        var FormGroup = ReactBootstrap.FormGroup;
        var FormControl = ReactBootstrap.FormControl;
        var Button = ReactBootstrap.Button;
        this.retrieveSavedArticles()
        return(
            <div onChange={this.retrieveSavedArticles}>
                <form>
                    <FormGroup
                    >
                        <FormControl
                            name="topic"
                            type="text"
                            placeholder="Star Wars"
                            onChange={this.onChangeTopic}
                            id="topic"
                            required
                        />
                        <FormControl
                            name="startYear"
                            type="text"
                            placeholder="1977"
                            onChange={this.onChangeStartYear}
                            id="startYear"
                            required
                        />
                        <FormControl
                            name="endYear"
                            type="text"
                            placeholder="2016"
                            onChange={this.onChangeEndYear}
                            id="endYear"
                            required
                        />
                    </FormGroup>
                    <Button 
                        type="button"
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                </form>
                <Results topic={this.state.topic} startYear={this.state.startYear} endYear={this.state.endYear} results={this.state.results}/>
                <Search savedArticles={this.state.savedArticles} />
            </div>
        )
    }
});

module.exports = Main;