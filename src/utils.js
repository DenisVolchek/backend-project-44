import readline from 'readline-sync';

export const ATTEMPTS_LIMIT = 3;
const MAX_NUMBER = 100;

export const informAboutWin = (name) => console.log(`Congratulations, ${name}!`);
export const informAboutCorrectAnswer = () => console.log('Correct!');
export const informAboutWrongAnswer = (name, answersPair) => {
  const [userInput, correct] = answersPair;

  console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const askQuestion = (value) => {
  console.log(`Question: ${value}`);
  return readline.question('Your answer: ');
};

export const getRandomNumber = (start = 0, end = MAX_NUMBER) => {
  const rand = Math.floor(Math.random() * (end - start + 1)) + start;
  return rand;
};
