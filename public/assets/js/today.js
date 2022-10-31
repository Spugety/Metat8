// code for entering affirmation and journal entries
const moodSelector =document.getElementById("mood") //changed from moods to mood to match jessia's entryhandlebars value
moodSelector.addEventListener("change", async (event) => {
    
const selectedMood = event.target.value
const moodChoice = moodPlaylistIds[selectedMood]
const mPlaylist = await fetchPlayList(moodChoice)
console.log(mPlaylist)
})




