import React from 'react';
import { useSelector } from 'react-redux';
import { useSearch } from './Search';
import SearchForm from './SearchForm';
import '../../styles/components/searchBar.css';

const SearchBar = () => {
	const searchTerm = useSelector((state) => state.search.searchTerm);
	useSearch(searchTerm);

	return (
		<div id="search-bar" className="search-bar">
			<SearchForm />
		</div>
	);
};

export default SearchBar;
