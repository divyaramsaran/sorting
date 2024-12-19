const sum = function (sum, element) {
  return sum + element;
}

const sortNumbers = function (arrayOfArrays) {

  return arrayOfArrays.sort(function (num1, num2) {
    return num1.reduce(sum) - num2.reduce(sum);
  });

}

const arrayOfArrays = [[1, 8, 5, 6], [1, 1], [9, 5]];

console.log(sortNumbers(arrayOfArrays));