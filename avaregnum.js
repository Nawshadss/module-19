const numbersArr = [24, 23, 55, 2, 3, 5, 6];

function evenAvarage(numbers) {
  let count = 0;
  evenTotal = 0;
  for (const number of numbers) {
    if (number % 2 !== 0) {
      count++;
      evenTotal = evenTotal + number;
    }
  }
  return evenTotal / count;
}

console.log(evenAvarage(numbersArr));
