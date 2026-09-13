const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
  const question = `${num1} ${operator} ${num2}`;
  return { question, correctAnswer };
};

const gameRule = 'What is the result of the expression?';

export { getQuestionAndAnswer, gameRule };