import React, { useEffect, useRef } from 'react';
import { trimString } from '../utils/formatText';

const ResultsListItem = (props) => {
	const { id, results, selectResults } = props;

	const resultCardRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (id === resultCardRef.current.value) {
				return selectResults(id);
			}
		});
		return () => {
			clearTimeout(timer);
		};
	}, [id, selectResults]);

	const handleClick = (e) => {
		if (e.target.value === resultCardRef.current.value) {
			selectResults(e.target.value);
		}
	};

	return (
		<div
			ref={resultCardRef}
			id={`results-list-${id}`}
			className="results-list-item card"
			onClick={handleClick}
			value={id}
		>
			<div className="results-list-item-content row g-0">
				<div className="results-list-item-section music-artwork-section">
					<img
						src={results.artworkUrl100}
						alt={`${results.collectionName} cover art`}
						className="music-artwork-image"
					/>
				</div>
				<div className="results-list-item-section results-details">
					<div className="results-details-content card-body">
						<h5
							ref={resultCardRef}
							className="results-details-section music-trackName card-title"
							onClick={handleClick}
							value={id}
						>
							{results.trackName}
						</h5>
						<p className="results-details-section music-artistName card-text">
							{trimString(results.artistName)}
						</p>
						<p className="results-details-section music-collection card-text">
							{results.collectionName}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultsListItem;
