const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../../actions/AppActions.js');
const AppStore = require('../../stores/AppStore.js');
const createReactClass = require('create-react-class');

const SearchForm = require("../Search/Search.js");
const MovieResults = require("../MovieResults/MovieResults.js");

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
    			{this.state.movies.length ? <MovieResults movies={this.state.movies}/> : null}
    		</div>
    	)
	},
	_onChange: function(){
		this.setState(getAppState());
	}
});