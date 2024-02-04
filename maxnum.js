const number = [23, 45, 22, 16, 666, 90];

function maxNUm(numbers) {
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
console.log(maxNUm(number));
