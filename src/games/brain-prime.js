import getRandomNumber from '../helpers/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 2;
const maxNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i < number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
const getRoundData = () => {
  const userQuestion = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(userQuestion) ? 'yes' : 'no';
  return[userQuestion, correctAnswer];
};

const startPrimeGame = () => gameRounds(description, getRoundData);
export default startPrimeGame;