// Question 1: ES6 Features
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject(new Error('Input must be an array'));
      return;
    }
    const result = mixedArray
      .filter((item) => typeof item === 'string')
      .map((word) => word.toLowerCase());
    resolve(result);
  });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((words) => console.log(words))
  .catch((err) => console.error(err.message));
