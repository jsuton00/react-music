import { all, takeEvery } from '@redux-saga/core/effects';
import * as actionTypes from '../actions/actionTypes';
import {
	searchAlbumsSaga,
	searchArtistsSaga,
	searchMusicSaga,
	searchSongsSaga,
} from './musicSaga';

export function* watchMusic() {
	yield all([
		takeEvery(actionTypes.SEARCH_MUSIC, searchMusicSaga),
		takeEvery(actionTypes.SEARCH_ARTISTS, searchArtistsSaga),
		takeEvery(actionTypes.SEARCH_ALBUMS, searchAlbumsSaga),
		takeEvery(actionTypes.SEARCH_SONGS, searchSongsSaga),
	]);
}
