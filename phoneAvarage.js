// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function avarage(phones) {
//   let count = 0;
//   let price = 0;
//   for (let phone of phones) {
//     count++;
//     console.log(count);
//     console.log(phone.price);
//     price = price + phone.price;
//   }
//   console.log(price);
//   return price / count;
// }

// console.log(avarage(phones));

function password(objects) {
  if (typeof objects !== "object") {
    return "invalid";
  }
  let count = [];
  for (let ob in objects) {
    count.push(ob);
  }

  if (count.length < 3) {
    return "Invalid";
  }
  let name = objects.name.split("");
  let birthYear = objects.birthYear;
  let siteName = objects.siteName;
  let newname = [];

  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      newname.push(name[i].toUpperCase());
    } else {
      newname.push(name[i]);
    }
  }
  name = newname.join("");
  let password = name + "#" + birthYear + "@" + siteName;
  return password;
}

console.log(
  password({
    name: "kolimuddi",
    birthYear: 199,
    siteName: "google",
  })
);
