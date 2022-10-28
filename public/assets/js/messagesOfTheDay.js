
const getMessageOfTheDay = () => {
    return arrayOfMessages[getRandomInt(arrayOfMessages.length)]
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const arrayOfMessages = [
  "I am successful.",
  "I am confident.",
  "I am powerful.",
  "I am getting better and better every day.",
  "I wake up motivated.",
  "I am a living, breathing example of motivation.",
  "I am living with abundance.",
  "I am having a positive and inpsiring impact on the people I come into contact with.",
  "I am inspiring people through my work.",
  "I'm rising above the thoughts that are trying to make me angry or afraid.",
  "I am not pushed by my problems; I am led by my dreams.",
  "I can be whatever I want to be.",
  "I am not defined by my past; I am driven by my future.",
];
