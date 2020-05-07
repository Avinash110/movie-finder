const AppDispatcher = require("../dispatcher/AppDispatcher.js");
const constants = require("../constants/constants.js");

const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const AppAPI = require("../utils/AppApi.js");

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = '';

const AppStore = assign({}, EventEmitter.prototype, {
	setMovieResults: function(movies){
		_movies = movies;
	},
	getMovieResults: function(){
		return _movies;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(cb) {
		this.on('change', cb);
	},
	removeChangeListener: function(cb) {
		this.removeListener('change', cb);
	}
}); 

AppDispatcher.register((payload) => {
	const action = payload.action;
	switch(action.actionType){
		case constants.SEARCH_MOVIES:
			AppAPI.searchMovies(action.movie);
			AppStore.emit(CHANGE_EVENT);
			break;
		case constants.RECEIVE_MOVIE_RESULT:
			AppStore.setMovieResults(action.movies);
			AppStore.emit(CHANGE_EVENT);
			break;
	}
	return true;
});

module.exports = AppStore;