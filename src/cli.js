import readlineSync from 'readline-sync';

export const firstGame = () => {
  console.log("Welcome to the Brain Games!");
  let askedUserName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${askedUserName}!`);
  };