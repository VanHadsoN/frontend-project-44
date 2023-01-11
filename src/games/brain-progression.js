import getRandomNumber from '../helpers/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression?';
const generateProgression = (firstItem, step, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

const getRoundData = () => {
  const first = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(first, step, length);
  const randomIndex = getRandomNumber(1, 10);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const startProgressionGame = () => gameRounds(description, getRoundData);
export default startProgressionGame;