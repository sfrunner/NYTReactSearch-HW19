// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var ReactBootstrap = require("react-bootstrap");

// Include the Main Component
var routes = require("./config/routes.js");

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(routes, document.getElementById("app"));
