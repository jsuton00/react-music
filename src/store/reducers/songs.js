import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtils';

const songState = {
	songs: [],
	filteredSongs: [],
	trackId: '',
	song: '',
	loadingSongs: false,
	errorSearchSongs: false,
};

const loadingSongs = (state, action) => {
	return updateObject(state, {
		loadingSongs: true,
	});
};

const searchSongsFail = (state, action) => {
	return updateObject(state, {
		loadingSongs: false,
		errorSearchSongs: false,
	});
};

const searchSongsSuccess = (state, action) => {
	return updateObject(state, {
		songs: action.songs,
		filteredSongs: action.songs,
		loadingSongs: false,
		errorSearchSongs: false,
	});
};

const selectSong = (state, action) => {
	let selectedSong;

	if (action.trackId) {
		selectedSong = state.songs.find((song) => song.trackId === action.trackId);
	}

	return updateObject(state, {
		trackId: action.trackId,
		song: selectedSong,
	});
};

const songsReducers = (state = songState, action) => {
	switch (action.type) {
		case actionTypes.LOADING_MUSIC:
			return loadingSongs(state, action);
		case actionTypes.SEARCH_SONGS_FAIL:
			return searchSongsFail(state, action);
		case actionTypes.SEARCH_SONGS_SUCCESS:
			return searchSongsSuccess(state, action);
		case actionTypes.SELECT_SONG:
			return selectSong(state, action);
		default:
			return state;
	}
};

export default songsReducers;
