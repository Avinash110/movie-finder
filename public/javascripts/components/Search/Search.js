const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../../actions/AppActions.js');
const AppStore = require('../../stores/AppStore.js');
const createReactClass = require('create-react-class');

module.exports = createReactClass({
	render: function() {
    	return (
			<div className="search-form">
				<h1 className="text-center">Search For A Movie</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input style={{marginBottom: "12px"}} type="text" className="form-control" ref="title" placeholder="Enter a Movie Title"/>
						<button className="btn btn-primary btn-block">Search Movies</button>
					</div>
				</form>
    		</div>
    	)
	},
	onSubmit: function(event) {
		event.preventDefault();
		const movie = {
			title: this.refs.title.value.trim()
		};

		AppActions.searchMovies(movie);
	}
});