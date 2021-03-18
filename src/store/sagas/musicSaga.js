import * as api from '../../apis/musicAPI';
import * as actions from '../actions/index';
import { put, call } from 'redux-saga/effects';

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
