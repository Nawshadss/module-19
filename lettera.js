let findA = "anowar";

let language = "JAvaScriptas AA";
let bigA = 0;
let text = 0;
for (let x of language) {
  console.log(x);
  if (x.includes("a")) {
    text++;
  }
  if (x.includes("A")) {
    bigA++;
  }
}

console.log("small a " + text);
console.log("Big a " + bigA);
