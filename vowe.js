let strings = "Write a function to count the number of vowels in a string";

function vowelCount(strings) {
  let count = 0;
  let stringArr = strings.split("");
  for (let x of stringArr) {
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
      count++;
    }
  }
  return count;
}
let totalVowe = vowelCount(strings);
console.log(totalVowe);
