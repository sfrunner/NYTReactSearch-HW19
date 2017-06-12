var React = require("react");
var ReactBootstrap = require("react-bootstrap");

//Retrieve helpers
var helpers = require("../helpers.js");

var Results = React.createClass({
    getInitialState: function(){
        return {results: helpers.getResults()}
    },
    renderTest: function(){
        console.log(this.state.results);
    },
    render: function(){
        var Jumbotron = ReactBootstrap.Jumbotron;
        var Button = ReactBootstrap.Button;
        return(
            <Jumbotron>
    <h1>Hello, world!</h1>
    <p>{this.state.results}</p>
    <p onClick={this.renderTest()}><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
        )
    }
});    

module.exports = Results;