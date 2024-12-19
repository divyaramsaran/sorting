const sortNumbers = function (array) {

  return array.sort(function (num1, num2) {
    return num1 - num2;
  });

}

const arrayOfArrays = [[1, 6, 9, 5], [9, 6, 8], [85, 5, 1]];

console.log(arrayOfArrays.map(sortNumbers));