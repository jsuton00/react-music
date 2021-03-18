import React from 'react';
import SongDetails from './components/SongDetails';
import Navigation from './components/Navigation';
import SearchResults from './components/Search/SearchResults';
import './styles/app.css';
import { useToggle } from './hooks/useToggle';

const App = () => {
	const [isOpen, toggleMenu] = useToggle();
	return (
		<div id="app" className="app">
			<header id="header" className="header container-fluid">
				<Navigation buttonValue={isOpen} clickButton={toggleMenu} />
			</header>
			<main className="app-content container-fluid">
				<div className="music-content row">
					{!isOpen ? (
						<div className="music-content-section search-results-col">
							<SearchResults />
						</div>
					) : (
						''
					)}
					<div className="music-content-section music-detials-col">
						<SongDetails />
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
