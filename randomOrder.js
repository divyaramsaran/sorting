const random = function (element1, element2) {
  return Math.random() - 0.5;
}

const collection  = ["a", "b", "1", 1, "c", 2, 3];

console.log(collection.sort(random));
//------------------------------------------------------------------------------

const personName = "ramsaran";

console.log(personName.split("").sort(random).join(""));

//------------------------------------------------------------------------------

const sentence = "this is to jumble words of a sentence"

console.log(sentence.split(" ").sort(random).join(" "));