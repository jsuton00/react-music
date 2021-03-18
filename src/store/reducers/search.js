import { updateObject } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const searchState = {
	searchTerm: '',
};

const setSearchTerm = (state, action) => {
	return updateObject(state, {
		searchTerm: action.searchTerm,
	});
};

const searchReducer = (state = searchState, action) => {
	switch (action.type) {
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		default:
			return state;
	}
};

export default searchReducer;
