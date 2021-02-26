import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import '../styles/components/searchResults.css';
import ResultsListItem from './ResultsListItem';

const SearchResults = () => {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state.filteredSongs);

	return (
		<div
			id="search-results"
			className="search-results list-group container-fluid"
		>
			{songs.length > 0 &&
				songs.map((song, index) => {
					return (
						<ResultsListItem
							key={index}
							id={song.trackId}
							results={song}
							selectResults={() => dispatch(actions.selectSong(song.trackId))}
						/>
					);
				})}
		</div>
	);
};

export default SearchResults;
