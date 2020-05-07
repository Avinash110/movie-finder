const React = require('react');
const ReactDOM = require('react-dom');
const AppActions = require('../../actions/AppActions.js');
const AppStore = require('../../stores/AppStore.js');
const createReactClass = require('create-react-class');

module.exports = createReactClass({
	render: function() {
		var link = 'http://www.imdb.com/title/'+this.props.movie.imdbID;
    	return (
			<div className="card bg-light">
			    <div className="card-body">
			    	<div className="row">
						<div className="col-md-4">
							<img src={this.props.movie.Poster} alt="" className="thumbnail"/>
						</div>
						<div className="col-md-8">
							<h4>{this.props.movie.Title}</h4>
							<ul className="list-group">
								<li className="list-group-item">Year Released: {this.props.movie.Year}</li>
								<li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
							</ul>
							<a style={{marginTop: "6px"}} target="_blank" href={link} className="btn btn-primary">View on IMDB</a>
						</div>
			    	</div>
			    </div>
			</div>
    	)
	}
});