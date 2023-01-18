import getRandomNumber from '../helpers/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What is the result of the expression? ';
const operations = ['+', '-', '*'];
const minOperand = 1;
const maxOperand = 20;
const num1 = getRandomNumber(minOperand, maxOperand);
const num2 = getRandomNumber(minOperand, maxOperand);

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error("Error! This operation is not correct here. Use '*' or '+' or '-'");
  }
};

const getRoundData = () => {
  const operator = operations[getRandomNumber(0, (operations.length - 1))];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(calculate(num1, operator, num2));
  return [question, rightAnswer];
};

const startCalcGame = () => gameRounds(description, getRoundData);

export default startCalcGame;
