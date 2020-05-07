const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../../actions/AppActions.js');
const AppStore = require('../../stores/AppStore.js');
const createReactClass = require('create-react-class');

const SearchForm = require("../Search/Search.js");

function getAppState(){
	return {
		movies: AppStore.getMovieResults()
	}
}
module.exports = createReactClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},
	render: function() {
    	return (
			<div>
    			<SearchForm />
    		</div>
    	)
	},
	_onChange: function(){
		this.setState(getAppState());
	}
});