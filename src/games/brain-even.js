import getRandomNumber from '../helpers/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomNumber = 1;
const maxRandomNumber = 20;

const isEven = (randomNum) => randomNum % 2 === 0;

const getRoundData = () => {
  const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};
const startEvenGame = () => gameRounds(description, getRoundData);

export default startEvenGame;
