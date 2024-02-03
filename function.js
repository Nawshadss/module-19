let arr = [4, 45, 3, 57, 3];

let sum = 0;
function arrSUm(ar) {
  for (const x of ar) {
    if (x % 2 !== 0) {
      sum = sum + x;
    }
  }
  return sum;
}

console.log(arrSUm(arr));
