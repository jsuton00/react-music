import * as actionTypes from './actionTypes';

export const loadingMusic = () => ({
	type: actionTypes.LOADING_MUSIC,
});

export const setSearchTerm = (searchTerm) => ({
	type: actionTypes.SET_SEARCH_TERM,
	searchTerm,
});

export const selectEntityType = (entityType) => ({
	type: actionTypes.SELECT_ENTITY_TYPE,
	entityType,
});

export const searchMusic = (searchTerm, entityType) => ({
	type: actionTypes.SEARCH_MUSIC,
	searchTerm,
	entityType,
});

export const searchMusicFail = () => ({
	type: actionTypes.SEARCH_MUSIC_FAIL,
});

export const searchMusicSuccess = (music) => ({
	type: actionTypes.SEARCH_MUSIC_SUCCESS,
	music,
});

export const searchArtists = (searchTerm) => ({
	type: actionTypes.SEARCH_ARTISTS,
	searchTerm,
});

export const searchArtistsFail = () => ({
	type: actionTypes.SEARCH_ARTISTS_FAIL,
});

export const searchArtistsSuccess = (artists) => ({
	type: actionTypes.SEARCH_ARTISTS_SUCCESS,
	artists,
});

export const searchAlbums = (searchTerm) => ({
	type: actionTypes.SEARCH_ALBUMS,
	searchTerm,
});

export const searchAlbumsFail = () => ({
	type: actionTypes.SEARCH_ALBUMS_FAIL,
});

export const searchAlbumsSuccess = (albums) => ({
	type: actionTypes.SEARCH_ALBUMS_SUCCESS,
	albums,
});

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

export const selectArtist = (artistId) => ({
	type: actionTypes.SELECT_ARTIST,
	artistId,
});

export const selectAlbum = (collectionId) => ({
	type: actionTypes.SELECT_ALBUM,
	collectionId,
});

export const selectSong = (trackId) => ({
	type: actionTypes.SELECT_SONG,
	trackId,
});
