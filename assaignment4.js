function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    const errmesesage = "enter a valid number";
    return errmesesage;
  }

  const ticketPrice = 120;
  const DaroanCost = 500;
  const totalStaffCost = 8 * 50;
  const profit = ticketSale * ticketPrice - (DaroanCost + totalStaffCost);
  return profit;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  let length = name.length - 1;
  let namearr = name.toLowerCase().split("");
  console.log(namearr);
  if (
    namearr[length] === "a" ||
    namearr[length] === "y" ||
    namearr[length] === "i" ||
    namearr[length] === "e" ||
    namearr[length] === "o" ||
    namearr[length] === "u" ||
    namearr[length] === "w"
  ) {
    return "good name";
  }
  return "bad name";
}

// ------------------------------- 3rd one

function deleteInvalids(array) {
  const newarr = [];
  if (Array.isArray(array)) {
    for (const arr of array) {
      if (typeof arr === "number") {
        if (!isNaN(arr)) {
          newarr.push(arr);
        }
      }
    }
    return newarr;
  }
  return "Invalid Array";
}

// -------------------------- 5 funtion

function monthlySavings(arr, livingCost) {
  let totalCost = 0;
  let savings = 0;
  if (Array.isArray(arr) && typeof livingCost === "number") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        totalCost = totalCost + arr[i] - (arr[i] * 20) / 100;
      } else {
        totalCost = totalCost + arr[i];
      }
    }
    savings = totalCost - livingCost;
    if (savings < 0) {
      return "earn more";
    }
    return savings;
  } else {
    return "invalid input";
  }
}

console.log(monthlySavings([2000, 3000, 3000], 7000));
