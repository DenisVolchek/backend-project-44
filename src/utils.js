import readline from 'readline-sync';

export const ATTEMPTS_LIMIT = 3;

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
