import {
  ATTEMPTS_LIMIT, informAboutCorrectAnswer, informAboutWin, askQuestion, informAboutWrongAnswer,
  getRandomNumber,
} from './utils/helpers.js';

const TASK_TYPES = {
  MULTIPLICATION: '*',
  ADDITION: '+',
  SUBTRACTION: '-',
};

const detectTaskType = () => {
  const coll = Object.values(TASK_TYPES);
  const taskIdx = getRandomNumber(0, coll.length);

  return coll[taskIdx];
};

const createTask = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const taskType = detectTaskType();

  let result = null;

  switch (taskType) {
    case TASK_TYPES.MULTIPLICATION:
      result = firstOperand * secondOperand;
      break;
    case TASK_TYPES.ADDITION:
      result = firstOperand + secondOperand;
      break;
    case TASK_TYPES.SUBTRACTION:
      result = firstOperand - secondOperand;
      break;
    default:
      break;
  }

  const question = `${firstOperand} ${taskType} ${secondOperand}`;
  return [question, result];
};

export default (name) => {
  let winStrike = 0;

  console.log('What is the result of the expression?');

  while (winStrike < ATTEMPTS_LIMIT) {
    const [question, result] = createTask();
    const userInput = Number(askQuestion(question));

    if (userInput === result) {
      informAboutCorrectAnswer();
      winStrike += 1;
    } else {
      informAboutWrongAnswer(name, [userInput, result]);
      return;
    }
  }

  informAboutWin(name);
};
