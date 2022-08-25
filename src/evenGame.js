import readline from 'readline-sync';

const MAX_NUMBER = 100;
const ATTEMPTS_LIMIT = 3;

const USER_INPUT_ACCEPT = 'yes';
const USER_INPUT_DECLINE = 'no';

const getRandomNumber = () => Math.floor(Math.random() * (MAX_NUMBER + 1));
const askQuestion = (value) => {
  console.log(`Question: ${value}`);
  return readline.question('Your answer: ');
};

const informAboutRules = () => {
  console.log(`Answer "${USER_INPUT_ACCEPT}" if the number is even, otherwise answer "${USER_INPUT_DECLINE}".`);
};

const isEven = (value) => value % 2 === 0;

const informAboutWin = (name) => console.log(`Congratulations, ${name}!`);
const informAboutCorrectAnswer = () => console.log('Correct!');

const informAboutWrongAnswer = (name, answersPair) => {
  const [correct, wrong] = answersPair;

  console.log(`'${correct}' is wrong answer ;(. Correct answer was '${wrong}'.`);
  console.log(`Let's try again, ${name}!`);
};

export default (name) => {
  let winStrike = 0;

  informAboutRules();

  while (winStrike < ATTEMPTS_LIMIT) {
    const value = getRandomNumber();

    const correctAnswerPair = isEven(value)
      ? [USER_INPUT_ACCEPT, USER_INPUT_DECLINE]
      : [USER_INPUT_DECLINE, USER_INPUT_ACCEPT];

    const userInput = askQuestion(value);

    if (userInput === correctAnswerPair[0]) {
      informAboutCorrectAnswer();
      winStrike += 1;
    } else {
      informAboutWrongAnswer(name, correctAnswerPair);
      winStrike = 0;
    }
  }

  informAboutWin(name);
};
