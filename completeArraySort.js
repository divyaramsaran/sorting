const sum = (sum, element) => sum + element;

const sort = (array) => array.sort((num1, num2) => num1 - num2);

const sortNumbers = (arrayOfArrays) => {
  arrayOfArrays.map(sort);

  return arrayOfArrays.sort(
    (num1, num2) => num1.reduce(sum) - num2.reduce(sum)
  );
};

const arrayOfArrays = [
  [1, 8, 5, 6],
  [1, 1],
  [9, 5],
];

console.log(sortNumbers(arrayOfArrays));
