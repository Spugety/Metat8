// code for entering affirmation and journal entries
const messagePlaceHolder = document.getElementById("messageOfTheDay");
messagePlaceHolder.innerHTML = getMessageOfTheDay();
const messageTimer = () => {
  const messagePlaceHolder = document.getElementById("messageOfTheDay");
  messagePlaceHolder.innerHTML = getMessageOfTheDay();
};
setInterval(messageTimer, 5000);
