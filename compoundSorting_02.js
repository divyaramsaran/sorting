const isNumber = (element) => typeof element === "number";

const isString = (element) => typeof element === "string";

const combinedSorting = (array) => {
  const numbersSet = array.filter(isNumber);
  const stringsSet = array.filter(isString);

  numbersSet.sort((num1, num2) => num1 - num2);
  stringsSet.sort();

  return [...numbersSet, ...stringsSet];
};

const combinedCollection = [9, 7, "goa", "america", 78, 4, "ball"];

console.log(combinedSorting(combinedCollection));
