import axios from 'axios';

export const searchMusic = async (searchTerm, entityType) => {
	return await axios.get(
		`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=${entityType}`,
	);
};

export const searchArtists = async (searchTerm) => {
	return await axios.get(
		`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=musicArtist`,
	);
};

export const searchAlbums = async (searchTerm) => {
	return await axios.get(
		`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album`,
	);
};

export const searchSongs = async (searchTerm) => {
	return await axios.get(
		`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=musicTrack`,
	);
};
