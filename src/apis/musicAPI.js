import axios from 'axios';

export const searchSongs = async (searchTerm) => {
	return await axios.get(
		`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=musicTrack`,
		{
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		},
	);
};
