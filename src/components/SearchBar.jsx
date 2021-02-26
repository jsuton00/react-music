import React from 'react';
import SearchForm from './SearchForm';
import '../styles/components/searchBar.css';
import SelectType from './SelectType';

const SearchBar = () => {
	return (
		<div id="search-bar" className="search-bar row">
			<SearchForm />
			<SelectType />
		</div>
	);
};

export default SearchBar;
