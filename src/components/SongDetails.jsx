import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';
import '../styles/components/musicDetails.css';

const SongDetails = () => {
	const selectedSong = useSelector((state) => state.songs.song);

	return (
		<div className="music-details container-fluid">
			<div className="music-details-content row">
				{selectedSong && (
					<div
						id={`music-details-${selectedSong.trackId}`}
						className="music-details-card card"
					>
						<img
							src={selectedSong.artworkUrl100}
							alt={`${selectedSong.collectionName} artwork`}
							className="music-details-artwork card-img-top"
						/>

						<div className="music-details-body card-body">
							<h5 className="song-title card-title">
								{selectedSong.trackName} | {selectedSong.artistName}
							</h5>
							<p className="release-date card-text">
								{`${selectedSong.collectionName} (${new Date(
									selectedSong.releaseDate,
								).getFullYear()})`}
							</p>
						</div>
						<div className="music-details-footer card-footer">
							<div className="music-details-player">
								<ReactAudioPlayer
									src={selectedSong.previewUrl}
									autoPlay
									controls
									className="music-player"
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SongDetails;
