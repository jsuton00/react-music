import { combineReducers } from 'redux';
import searchReducer from './search';
import songsReducers from './songs';

const rootReducer = combineReducers({
	search: searchReducer,
	songs: songsReducers,
});

export default rootReducer;
