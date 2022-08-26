import {
  ATTEMPTS_LIMIT, informAboutCorrectAnswer, informAboutWin, askQuestion, informAboutWrongAnswer,
} from './utils.js';

const MAX_NUMBER = 100;

const USER_INPUT_ACCEPT = 'yes';
const USER_INPUT_DECLINE = 'no';

const getRandomNumber = () => Math.floor(Math.random() * (MAX_NUMBER + 1));

const isEven = (value) => value % 2 === 0;

export default (name) => {
  let winStrike = 0;

  console.log(`Answer "${USER_INPUT_ACCEPT}" if the number is even, otherwise answer "${USER_INPUT_DECLINE}".`);

  while (winStrike < ATTEMPTS_LIMIT) {
    const value = getRandomNumber();

    const correctAnswer = isEven(value) ? USER_INPUT_ACCEPT : USER_INPUT_DECLINE;
    const userInput = askQuestion(value);

    if (userInput === correctAnswer) {
      informAboutCorrectAnswer();
      winStrike += 1;
    } else {
      informAboutWrongAnswer(name, [userInput, correctAnswer]);
      winStrike = 0;
    }
  }

  informAboutWin(name);
};
