import {
  ATTEMPTS_LIMIT, informAboutCorrectAnswer, informAboutWin, askQuestion, informAboutWrongAnswer,
  getRandomNumber,
} from '../utils/helpers.js';

import { USER_INPUT_ACCEPT, USER_INPUT_DECLINE } from '../utils/binaryLogic.js';

const isEven = (value) => value % 2 === 0;

export default (name) => {
  let winStrike = 0;

  console.log(`Answer "${USER_INPUT_ACCEPT}" if the number is even, otherwise answer "${USER_INPUT_DECLINE}".`);

  while (winStrike < ATTEMPTS_LIMIT) {
    const value = getRandomNumber(1);

    const correctAnswer = isEven(value) ? USER_INPUT_ACCEPT : USER_INPUT_DECLINE;
    const userInput = askQuestion(value);

    if (userInput === correctAnswer) {
      informAboutCorrectAnswer();
      winStrike += 1;
    } else {
      informAboutWrongAnswer(name, [userInput, correctAnswer]);
      return;
    }
  }

  informAboutWin(name);
};
