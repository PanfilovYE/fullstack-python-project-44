const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const correctAnswer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, correctAnswer };
};

const gameRule = "Find the greatest common divisor of given numbers.";

export { getQuestionAndAnswer, gameRule };