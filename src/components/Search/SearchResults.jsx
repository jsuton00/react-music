import React from 'react';
import { useDispatch } from 'react-redux';
import { useSearch } from './Search';
import * as actions from '../../store/actions/index';
import ResultsListItem from '../ResultsListItem';
import '../../styles/components/searchResults.css';

const SearchResults = () => {
	const dispatch = useDispatch();
	const [songs] = useSearch();

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
