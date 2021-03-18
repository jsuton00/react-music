import { all, takeEvery } from '@redux-saga/core/effects';
import * as actionTypes from '../actions/actionTypes';
import { searchSongsSaga } from './musicSaga';

export function* watchMusic() {
	yield all([takeEvery(actionTypes.SEARCH_SONGS, searchSongsSaga)]);
}
