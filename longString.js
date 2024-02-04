let strings =
  "Write a Nawshads24 function to count the number of vowels in a string";

function vowelCount(strings) {
  let long = "";
  let stringArr = strings.split(" ");
  console.log(stringArr);

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].length > long.length) {
      long = stringArr[i];
    }
  }
  return long;
}
console.log(vowelCount(strings));
