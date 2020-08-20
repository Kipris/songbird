export const getCorrectAnswerId = (min = 0, max = 5) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
