let stig = "searches a string for a value";

let split = stig.split(" ");
console.log(split);
let totalLetter = "";
for (let word of split) {
  console.log(word);
  let letter = word.split("");
  let newword = [];
  for (let i = 0; i < letter.length; i++) {
    if (i === 0) {
      newword.push(letter[i].toUpperCase());
    } else {
      newword.push(letter[i]);
    }
  }
  let joinword = newword.join("");
  console.log(joinword);
  totalLetter = totalLetter + " " + joinword;
}
console.log(totalLetter);
