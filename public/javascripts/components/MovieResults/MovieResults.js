const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../../actions/AppActions.js');
const AppStore = require('../../stores/AppStore.js');
const createReactClass = require('create-react-class');

const Movie = require('../Movie/Movie.js');

module.exports = createReactClass({
	render: function() {
    	return (
			<div>
				<h3 className="text-center">Results</h3>
				{
					this.props.movies.map((movie, index) => {
						return (
							<Movie movie={movie} key={index}/>
						)
					})
				}
			</div>
    	)
	}
});