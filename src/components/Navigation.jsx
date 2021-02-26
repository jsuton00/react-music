import { LibraryMusic } from '@material-ui/icons';
import React from 'react';
import '../styles/components/navigation.css';
import SearchBar from './SearchBar';

const Navigation = () => {
	return (
		<nav id="navigation" role="navigation" className="navigation navbar row">
			<div className="nav-section brand-section">
				<h1 className="app-title">
					React Music
					<span className="app-icon">
						<LibraryMusic />
					</span>
				</h1>
			</div>
			<div className="nav-section search-section">
				<SearchBar />
			</div>
		</nav>
	);
};

export default Navigation;
