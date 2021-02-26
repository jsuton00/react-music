import { updateObject } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
	music: [],
	filteredMusic: [],
	artists: [],
	filteredArtists: [],
	albums: [],
	filteredAlbums: [],
	songs: [],
	filteredSongs: [],
	searchTerm: '',
	artistId: '',
	collectionId: '',
	trackId: '',
	artist: '',
	album: '',
	song: '',
	loadingMusic: false,
	errorSearchMusic: false,
};

const loadingMusic = (state, action) => {
	return updateObject(state, {
		loadingMusic: true,
		errorSearchMusic: false,
	});
};

const setSearchTerm = (state, action) => {
	return updateObject(state, {
		searchTerm: action.searchTerm,
		loadingMusic: false,
		errorSearchMusic: false,
	});
};

const searchSongsFail = (state, action) => {
	return updateObject(state, {
		loadingMusic: false,
		errorSearchMusic: false,
	});
};

const searchSongsSuccess = (state, action) => {
	return updateObject(state, {
		songs: action.songs,
		filteredSongs: action.songs,
		loadingMusic: false,
		errorSearchMusic: false,
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

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOADING_MUSIC:
			return loadingMusic(state, action);
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
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

export default reducer;
