var React = require("react");
var ReactBootstrap = require("react-bootstrap");

//Retrieve helpers
var helpers = require("../helpers.js");

var Results = React.createClass({
    getInitialState: function(){
        return {results: ""}
    },
    renderTest: function(){
        console.log(helpers.getResults());
    },
    render: function(){
        var Jumbotron = ReactBootstrap.Jumbotron;
        var Button = ReactBootstrap.Button;
        return(
            <Jumbotron>
    <h1>Hello, world!</h1>
    <p>{this.state.results}</p>
    <p><Button bsStyle="primary" onClick={this.renderTest()}>Learn more</Button></p>
  </Jumbotron>
        )
    }
});    

module.exports = Results;