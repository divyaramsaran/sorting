const combinedSorting = function (element1, element2) {
  if (Math.abs(element1) && Math.abs(element2)) {
    return element1 - element2;
  }

  if (Math.abs(element1) + "" === "NaN" && Math.abs(element1) + "" === "NaN") {
    const sortedElements = [element1, element2].sort()

    return element1 === sortedElements[0] ? -1 : 1
  }

  return Math.abs(element1) ? -1 : 1;
}

const combinedCollection = [9, 7, "h", "a", 78, 4, "d"];

console.log(combinedCollection.sort(combinedSorting));