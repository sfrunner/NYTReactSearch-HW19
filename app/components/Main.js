var React = require("react");
var ReactBootstrap = require("react-bootstrap");

//Retrieve helpers
var helpers = require("../helpers.js");

var Main = React.createClass({
    getInitialState: function(){
        return {topic:"",startYear:"",endYear:""}
    },
    consoleLog: function(event){
        event.preventDefault();
        console.log(this.state);
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
            helpers.getSearch(this.state.topic,this.state.startYear,this.state.endYear);
    },
    render: function(){
        var FormGroup = ReactBootstrap.FormGroup;
        var FormControl = ReactBootstrap.FormControl;
        var Button = ReactBootstrap.Button;
        return(
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
        )
    }
});

module.exports = Main;