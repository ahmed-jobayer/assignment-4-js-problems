//Problem-01 : Help The Zoo Manager

function calculateMoney(ticketCount) {
  if (ticketCount >= 0) {
    const ticketPrice = 120;
    const dailyExpence = 500 + 8 * 50;
    let profit = ticketCount * ticketPrice - dailyExpence;
    return profit;
  } else {
    return "Invalid Number";
  }
}

// let ticket = calculateMoney(93);
// console.log (ticket);

//Problem-02: Good Name , Bad Name

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  const lastCharacter = name[name.length - 1];
  if (
    lastCharacter === "a" ||
    lastCharacter === "e" ||
    lastCharacter === "i" ||
    lastCharacter === "o" ||
    lastCharacter === "u" ||
    lastCharacter === "y" ||
    lastCharacter === "w"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

// let goodBad = checkName('jobaye');
// console.log (goodBad);

//Problem 03 : Virus in my Array

function deleteInvalids(anyArray) {
  if (!Array.isArray(anyArray)) {
    return "Invalid Array";
  }
  let onlyNumber = [];
  for (let i = 0; i < anyArray.length; i++) {
    if (typeof anyArray[i] === "number") {
      onlyNumber.push(anyArray[i]);
    }
  }
  return onlyNumber;
}

// let number = deleteInvalids(" 1 , 2 , -3, jobayer ");
// console.log(number);

//Problem 04 : Make A Great Password

function password({ webName, userName, birthYear }) {
  if (
    !webName ||
    !userName ||
    !birthYear ||
    birthYear.toString().length !== 4
  ) {
    return "Invalid";
  } else {
    webFirstUpper = webName.charAt(0).toUpperCase() + webName.slice(1);
    let makePass = "";
    makePass = webFirstUpper + "#" + userName + "@" + birthYear;
    return makePass;
  }
}

// let autoPass = password({
//   userName: "rahat",
//   birthYear: 2024,
//   webName: "Facebook"
// });
// console.log(autoPass);

//Problem 05 : Monthly Savings of a Freelancer

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || isNaN(livingCost)) {
    return "invalid input";
  }

  let arrWithTax = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3000) {
      arrWithTax.push(0.8 * arr[i]);
    } else {
      arrWithTax.push(arr[i]);
    }
  }

  let income = 0;
  for (let i = 0; i < arrWithTax.length; i++) {
    income += arrWithTax[i];
  }

  let savings = income - livingCost;

  if (savings < 0) {
    return "Earn More";
  }

  return savings;
}

// let output = monthlySavings([1000, 2000, 3500], 500);
// console.log(output);
