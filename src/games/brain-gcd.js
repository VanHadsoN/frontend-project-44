import getRandomNumber from '../helpers/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minDividable = 1;
const maxDividable = 20;

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};
const getRoundData = () => {
  const randomNumber1 = getRandomNumber(minDividable, maxDividable);
  const randomNumber2 = getRandomNumber(minDividable, maxDividable);
  const randomOperation = `${randomNumber1} ${randomNumber2}`;
  return [randomOperation, String(gcd(randomNumber1, randomNumber2))];
};
const startGcdGame = () => gameRounds(description, getRoundData);
export default startGcdGame;
