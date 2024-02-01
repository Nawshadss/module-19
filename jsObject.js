let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys = Object.keys(myObject);
const values = Object.values(myObject);

// console.log(keys);
// console.log(values);

const leth = values.length;
console.log(leth);

for (let i = 0; i < leth; i++) {
  console.log(
    keys[i] + ":" + values[i] + " " + "|" + " type:" + typeof values[i]
  );
}
