import * as actionTypes from './actionTypes';

export const setSearchTerm = (searchTerm) => ({
	type: actionTypes.SET_SEARCH_TERM,
	searchTerm,
});

export const loadingMusic = () => ({
	type: actionTypes.LOADING_MUSIC,
});
