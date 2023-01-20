import readlineSync from 'readline-sync';

const requestName = () => {
  console.log('Welcome to the Brain Games!');
  const askedUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askedUserName}!`);
};

export default requestName;
