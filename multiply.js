function multiplu(num) {
  let result = 0;
  if (num % 2 !== 0) {
    result = num * 2;
  } else {
    result = num / 2;
  }
  return result;
}

console.log(multiplu(4));
