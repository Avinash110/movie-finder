const App = require("./components/App/App.js");
const React = require('react');
const ReactDOM = require('react-dom');

const appApi = require("./utils/AppApi.js");

ReactDOM.render(
	<App />,
	document.getElementById("root")
);