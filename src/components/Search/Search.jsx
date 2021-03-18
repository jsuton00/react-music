import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';

export const useSearch = (searchTerm) => {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state.songs.filteredSongs);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm && searchTerm.length > 0) {
				return dispatch(actions.searchSongs(searchTerm));
			}
		});
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, searchTerm]);

	return [songs];
};
