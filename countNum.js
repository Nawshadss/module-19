let numbers = [2, 4, 2, 5, 6, 4, 7, 3];

function couontNum(numbers) {
  let ness = [];
  let count = 0;
  for (const num of numbers) {
    ness.push(num);
    if (ness.includes(num)) {
      count++;
    }
  }
  console.log(ness, count);
}

couontNum(numbers);
