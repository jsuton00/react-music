import * as actionTypes from './actionTypes';

export const searchSongs = (searchTerm) => ({
	type: actionTypes.SEARCH_SONGS,
	searchTerm,
});

export const searchSongsFail = () => ({
	type: actionTypes.SEARCH_SONGS_FAIL,
});

export const searchSongsSuccess = (songs) => ({
	type: actionTypes.SEARCH_SONGS_SUCCESS,
	songs,
});

export const selectSong = (trackId) => ({
	type: actionTypes.SELECT_SONG,
	trackId,
});
