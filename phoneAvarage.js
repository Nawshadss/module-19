const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function avarage(phones) {
  let count = 0;
  let price = 0;
  for (let phone of phones) {
    count++;
    console.log(count);
    console.log(phone.price);
    price = price + phone.price;
  }
  console.log(price);
  return price / count;
}

console.log(avarage(phones));
