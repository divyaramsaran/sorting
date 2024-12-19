//---> compound sorting

const isNumber = function (element) {
  return +element === element;
}

const isString = function (element) {
  return +element !== element;
}

const combinedSorting = function (array) {
  const numbersList = array.filter(isNumber);
  const stringsList = array.filter(isString);

  return function () {
    numbersList.sort(function (num1, num2) {
      return num1 - num2;
    });

    stringsList.sort();

    return [...numbersList, ...stringsList]
  }
}

const combinedCollection = [9, 7, "h", "a", 78, 4];

console.log(combinedSorting(combinedCollection)());