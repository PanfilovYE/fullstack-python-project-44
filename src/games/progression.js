const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);

  const progression = getProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

const gameRule = 'What number is missing in the progression?';

export { getQuestionAndAnswer, gameRule };