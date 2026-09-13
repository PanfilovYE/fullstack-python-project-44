const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return {
    question: String(number),
    correctAnswer,
  };
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export { getQuestionAndAnswer, gameRule };