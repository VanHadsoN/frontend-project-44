import getRandomNumber from '../helpers/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 2;
const maxStep = 10;
const minStart = 1;
const maxStart = 10;

function generateProgression(firstItem, step, length) {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
}

const getRoundData = () => {
  const minIndex = 2;
  const maxIndex = 10;
  const first = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = generateProgression(first, step, length);
  const randomIndex = getRandomNumber(minIndex, maxIndex);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const startProgressionGame = () => gameRounds(description, getRoundData);
export default startProgressionGame;
