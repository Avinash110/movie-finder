const AppDispatcher = require("../dispatcher/AppDispatcher.js");
const constants = require("../constants/constants.js");

const AppActions = {
	searchMovies: (movie) => {
		AppDispatcher.handleViewAction({
			actionType: constants.SEARCH_MOVIES,
			movie: movie
		});
	},
	receiveMovieResults: (movies) => {
		AppDispatcher.handleViewAction({
			actionType: constants.RECEIVE_MOVIE_RESULT,
			movies: movies
		});	
	}
};


module.exports = AppActions;