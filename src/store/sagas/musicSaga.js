import * as api from '../../apis/musicAPI';
import * as actions from '../actions/index';
import { put, call } from 'redux-saga/effects';

export function* searchMusicSaga(action) {
	try {
		yield put(actions.loadingMusic());
		let response;

		if (action.searchTerm && action.entityType) {
			response = yield call(
				api.searchMusic,
				action.searchTerm,
				action.entityType,
			);
			yield put(actions.searchMusicSuccess(response.data.results));
		} else if (action.searchTerm) {
			response = yield call(api.searchMusic, action.searchTerm);
			yield put(actions.searchMusicSuccess(response.data.results));
		}
	} catch (err) {
		yield put(actions.searchMusicFail());
	}
}

export function* searchArtistsSaga(action) {
	try {
		yield put(actions.loadingMusic());
		let response;

		if (action.searchTerm) {
			response = yield call(api.searchArtists, action.searchTerm);
		}

		yield put(actions.searchArtistsSuccess(response.data.results));
	} catch (err) {
		yield put(actions.searchArtistsFail());
	}
}
export function* searchAlbumsSaga(action) {
	try {
		yield put(actions.loadingMusic());
		let response;

		if (action.searchTerm) {
			response = yield call(api.searchAlbums, action.searchTerm);
		}

		yield put(actions.searchAlbumsSuccess(response.data.results));
	} catch (err) {
		yield put(actions.searchAlbumsFail());
	}
}
export function* searchSongsSaga(action) {
	try {
		yield put(actions.loadingMusic());
		let response;

		if (action.searchTerm) {
			response = yield call(api.searchSongs, action.searchTerm);
		}

		yield put(actions.searchSongsSuccess(response.data.results));
	} catch (err) {
		yield put(actions.searchSongsFail());
	}
}
