const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32f1a5f52amsha5a95603a185a54p15ed21jsn2ab579797b2b',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchPlayList  (moodPlaylistId) 
 {
     const awaitFetch = await fetch(`https://spotify23.p.rapidapi.com/playlist_tracks/?id=${moodPlaylistId}&offset=0&limit=100`, options)
     const response = await awaitFetch.json()
     return response
 }

moodPlaylistIds = {
    great: "2VIfYymoUuA9Ptpbn8s5K1",
    good: "2E4JQ1SU0BTX9wmRWMWI7Q",
    okay: "21pYPaf5qzQ8jd9IfARAq5",
    bad: "0pilUmSzjlEYbGPRKklh6P",
    awful: "4U4QkrH5kOceeOeTc8dwbS"
}


