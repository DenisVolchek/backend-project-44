import {
  ATTEMPTS_LIMIT, informAboutCorrectAnswer, informAboutWin, askQuestion, informAboutWrongAnswer,
  getRandomNumber,
} from '../utils/helpers.js';

const createProgression = () => {
  const array = [];

  let start = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 10);

  for (let i = 0; i < length; i += 1) {
    start += step;
    array.push(start);
  }

  return array;
};

const prepareQuestion = () => {
  const progression = createProgression();
  const answerIdx = getRandomNumber(0, progression.length - 1);
  const answer = progression[answerIdx];
  const question = progression
    .map((value, idx) => (idx === answerIdx ? '..' : value))
    .join(' ');

  return [question, answer];
};

export default (name) => {
  let winStrike = 0;

  console.log('What number is missing in the progression?');

  while (winStrike < ATTEMPTS_LIMIT) {
    const [question, answer] = prepareQuestion();

    const userInput = askQuestion(question);

    if (Number(userInput) === answer) {
      informAboutCorrectAnswer();
      winStrike += 1;
    } else {
      informAboutWrongAnswer(name, [userInput, answer]);
      return;
    }
  }

  informAboutWin(name);
};
