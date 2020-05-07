const AppActions = require('../actions/AppActions.js');
const constants = require("../constants/constants.js");

module.exports = {
	searchMovies: (movie) => {
		$.ajax({
			url: `http://www.omdbapi.com/?s=${movie.title}&apikey=${constants.API_KEY}`,
			datatype: 'json',
			cache: 'false',
			success: (data) => {
				AppActions.receiveMovieResults(data && data.Search ? data.Search : []);
			},
			error: (xhr, status, error) => {
				alert(error);
			}
		});
	}
};