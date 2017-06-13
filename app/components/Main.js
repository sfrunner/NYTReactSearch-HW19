var React = require("react");
var ReactBootstrap = require("react-bootstrap");

//Retrieve helpers
var helpers = require("../helpers.js");
var Results = require("./Results.js");

var Main = React.createClass({
    getInitialState: function(){
        return {topic:"",startYear:"",endYear:"",results:""}
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
        var resultResponse = "";
        helpers.getSearch(this.state.topic,this.state.startYear,this.state.endYear)
        .then(function(responsePOST){
            helpers.getResults()
            .then(function(responseGET){
                console.log(responseGET);
                this.setState({results: responseGET.data});
                
            }.bind(this));
        }.bind(this));
    },
    render: function(){
        var FormGroup = ReactBootstrap.FormGroup;
        var FormControl = ReactBootstrap.FormControl;
        var Button = ReactBootstrap.Button;
        return(
            <div>
         <form>
        <FormGroup
          controlId="search-form"
        >
          <FormControl
            name="topic"
            type="text"
            placeholder="Star Wars"
            onChange={this.onChangeTopic}
            id="topic"
          />
           <FormControl
            name="startYear"
            type="text"
            placeholder="1977"
            onChange={this.onChangeStartYear}
            id="startYear"
          />
           <FormControl
            name="endYear"
            type="text"
            placeholder="2016"
            onChange={this.onChangeEndYear}
            id="endYear"
          />
        </FormGroup>
        <Button 
            type="button"
            onClick={this.onSubmit}
            >
            Submit
        </Button>
      </form>
      <Results topic={this.state.topic} startYear={this.state.startYear} endYear={this.state.endYear} results={this.state.results} />
      </div>

        )
    }
});

module.exports = Main;