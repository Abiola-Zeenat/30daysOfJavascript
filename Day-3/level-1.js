//Question 1
let firstName = "Abiola";
let lastName = "Abdulsalam";
let country = "Nigeria";
let city = "Lagos";
let age = 30;
let isMarried = true;
let year = 2023;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Question 2
"10" === 10 ? console.log(true) : console.log("Not the same type");

//Question 3
parseInt("9.8") == 10 ? console.log(true) : console.log("Not equal");

//Question 4
// Truthy statements
let x = 5,
  name = "Zeenat",
  isRaining = true;

// Falsy statements
let num,
  emptyString = "",
  y = 0;

//Question 5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length > "jargon".length);

//Question 6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log("dragon".includes("on") && "python".includes("on"));

//Question 7
const now = new Date();

currentYear = now.getFullYear();
console.log(`The year today is : ${currentYear}`);
currentMonth = now.getMonth();
console.log(`The Month today as a number is : ${currentMonth}`);
currentDate = now.getDate();
console.log(`The date today is : ${currentDate}nd`);
currentDay = now.getDay();
console.log(`The day today as a number is : ${currentDay}`);
currentHour = now.getHours();
console.log(`The hours now is : ${currentHour}`);
currentMinute = now.getMinutes();
console.log(`The minutes now is : ${currentMinute}`);
totalSeconds = now.getTime();
console.log(`The numbers of seconds elapsed from January 1, 1970 to now is : ${totalSeconds}`);
