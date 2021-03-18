import React from 'react';
import SearchBar from './Search/SearchBar';
import { LibraryMusic, Menu } from '@material-ui/icons';
import '../styles/components/navigation.css';

const Navigation = (props) => {
	const { buttonValue, clickButton } = props;
	return (
		<nav id="navigation" role="navigation" className="navigation navbar row">
			<div className="nav-section nav-toggle-section">
				<div
					className="toggle-button"
					role="button"
					aria-label="Toggle results menu"
					onClick={(e) => clickButton(e.target.value)}
					value={buttonValue}
				>
					<span className="bar-icon">
						<Menu />
					</span>
				</div>
			</div>
			<div className="nav-section brand-section">
				<h1 className="app-title row">
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
