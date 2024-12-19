const sortEvensAndOdds = function (element1, element2) {
  if ((element1 & 1) === (element2 & 1)) {
    return element1 - element2;
  }

  return ((element1 | 1) === element1 + 1 ) ? 1 : -1;
}

const array = [1, 2, 3, 4, 5, 6];
const sortedArray = array.sort(sortEvensAndOdds);

console.log(sortedArray);