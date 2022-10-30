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
    awful: "4U4QkrH5kOceeOeTc8dwbS"
}

// const loginButton = $("#btn"); //once user clicks the login button this will give it functionality
// const loginInput = "";   //this is waiting for the user input
// const moodPlayList = $("#Playlist"); //may go with pulling playlist
// const moodTracks = $("#MoodTracks"); //may go with pulling tracks
// const upbeat = $("#upbeat"); //upbeat music for track or playlist
// const feelGood = $("#feelGood"); //feelgood music for track or playlist
// const groove = $("#groove"); //groove music for track or playlist
// const rock = $("#rock"); //rock music for track or playlist
// const jazz = $("#jazz"); //jazz music for track or playlist
// const gospel = $("#gospel"); //gospel music for track or playlist
// const pop = $("#pop"); //pop music for track or playlist
// const country = $("#country"); //country music for track or playlist
// const rhythmBlues = $("#rhythmBlues"); //rhythm and blues music for track or playlist
// const hipHop = $("#hipHop"); //rap music for track or playlist
// const reggae = $("#reggae"); //reggae music for track or playlist
// const dubStep = $("#dubstep"); //dubstep music for track or playlist
// const latin = $("#latin"); //latin music for track or playlist
// const afroBeats = $("#afroBeats"); //afroBeats music for track or playlist
// // const apiKey = //once I have an api key that fetches this information we will be able to integrate it into our project

// // const axios = require("axios"); possible api request for node.js that will pull the playlist
// // const options = {
// //   method: 'GET',
// //   url: 'https://spotify23.p.rapidapi.com/playlist/',
// //   params: {id: '37i9dQZF1DX4Wsb4d7NKfP'},
// //   headers: {
// //     'X-RapidAPI-Key': '32f1a5f52amsha5a95603a185a54p15ed21jsn2ab579797b2b',
// //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// //   }
// // };

// // axios.request(options).then(function (response) {
// // 	console.log(response.data);
// // }).catch(function (error) {
// // 	console.error(error);
// // });

// // const axios = require("axios"); this is a potential api that we can use possibly for node.js that will pull the playlist tracks

// // const options = {
// //   method: 'GET',
// //   url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
// //   params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'},
// //   headers: {
// //     'X-RapidAPI-Key': '32f1a5f52amsha5a95603a185a54p15ed21jsn2ab579797b2b',
// //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// //   }
// // };

// // axios.request(options).then(function (response) {
// // 	console.log(response.data);
// // }).catch(function (error) {
// // 	console.error(error);
// // });

// // const axios = require("axios"); possible api route that will display albums to the user

// // const options = {
// //   method: 'GET',
// //   url: 'https://spotify23.p.rapidapi.com/albums/',
// //   params: {ids: '3IBcauSj5M2A6lTeffJzdv'},
// //   headers: {
// //     'X-RapidAPI-Key': '32f1a5f52amsha5a95603a185a54p15ed21jsn2ab579797b2b',
// //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// //   }
// // };

// // axios.request(options).then(function (response) {
// // 	console.log(response.data);
// // }).catch(function (error) {
// // 	console.error(error);
// // });

// // possible api route that will allow us to pull by tracks in spotify
// // const axios = require("axios");

// // const options = {
// //   method: 'GET',
// //   url: 'https://spotify23.p.rapidapi.com/tracks/',
// //   params: {ids: '4WNcduiCmDNfmTEz7JvmLv'},
// //   headers: {
// //     'X-RapidAPI-Key': '32f1a5f52amsha5a95603a185a54p15ed21jsn2ab579797b2b',
// //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// //   }
// // };

// // axios.request(options).then(function (response) {
// // 	console.log(response.data);
// // }).catch(function (error) {
// // 	console.error(error);
// // });
