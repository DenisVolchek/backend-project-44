import { USER_INPUT_ACCEPT, USER_INPUT_DECLINE } from '../utils/binaryLogic.js';
import {
  ATTEMPTS_LIMIT, informAboutWin,
  informAboutCorrectAnswer, askQuestion, informAboutWrongAnswer,
  getRandomNumber,
} from '../utils/helpers.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number - 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default (name) => {
  let winStrike = 0;

  console.log(`Answer '${USER_INPUT_ACCEPT}' if given number is prime. Otherwise answer '${USER_INPUT_DECLINE}'`);

  while (winStrike < ATTEMPTS_LIMIT) {
    const value = getRandomNumber();

    const correctAnswer = isPrime(value) ? USER_INPUT_ACCEPT : USER_INPUT_DECLINE;
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
