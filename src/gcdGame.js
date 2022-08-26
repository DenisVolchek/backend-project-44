import {
  ATTEMPTS_LIMIT, informAboutCorrectAnswer, informAboutWin, askQuestion, informAboutWrongAnswer,
  getRandomNumber,
} from './utils/helpers.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default (name) => {
  let winStrike = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (winStrike < ATTEMPTS_LIMIT) {
    const a = getRandomNumber(1);
    const b = getRandomNumber(1);

    const correctAnswer = gcd(a, b);
    const userInput = askQuestion(`${a} ${b}`);

    if (Number(userInput) === correctAnswer) {
      informAboutCorrectAnswer();
      winStrike += 1;
    } else {
      informAboutWrongAnswer(name, [userInput, correctAnswer]);
      winStrike = 0;
    }
  }

  informAboutWin(name);
};
