const prompt = require("prompt-sync")();

//Question 1

let b = prompt("Enter base: ");
let h = prompt("Enter height: ");
area = 0.5 * b * h;
console.log(`The area of the triangle is ${area}`);

//Question 2

let a = parseInt(prompt("Enter side a: "));
b = parseInt(prompt("Enter side b: "));
c = parseInt(prompt("Enter side c: "));
perimeter = a + b + c;
console.log(`The perimeter of the triangle is ${perimeter}`);

//Question 3
let l = parseInt(prompt("Enter length: "));
let w = parseInt(prompt("Enter width: "));
area = l * w;
perimeter = 2 * (l + w)
console.log(`The area of the triangle is ${area} while the perimeter is ${perimeter}`);

//Question 4
let r = prompt("Enter radius: ");
const pi = 3.14;
area = pi * r ** 2;
circumference = 2 * pi * r
console.log(`The area of the triangle is ${area} while the circumference is ${circumference}`);

//Question 5
// equation : y = 2x - 2

//Question 6

//Question 7

//Question 8

//Question 9
let hours = parseInt(prompt("Enter hours: "));
let ratePerHour = parseInt(prompt("Enter rate per hour: "));
earning = hours * ratePerHour
console.log(`Your weekly earning is ${earning}`);

//Question 10
let name = 'Abiola';
(name.length > 7) ? console.log('Your name is long') : console.log('Your name is short');

//Question 11
let firstName = 'Abiola'
let lastName = 'Abdulsalam'
if(firstName.length > lastName.length){
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
}else{
  console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
}

//Question 12
let myAge = 30
let yourAge = 22
console.log(`I am ${myAge - yourAge} years older than you.`)

//Question 13
const now = new Date();
let currentYear = now.getFullYear();
let birthYear = prompt("Enter your birth year: ");
let userAge = currentYear - birthYear;
if (userAge > 18) {
  console.log(`You are ${userAge}. You are old enough to drive`);
} else {
  console.log(
    `You are ${userAge}. You will be allowed to drive after ${
      18 - userAge
    } years.`
  );
}

//Question 14
let yearsLived = prompt("Enter number of years you live: ");
secondsLived = 365 * 24 * 60 * 60 * yearsLived;
console.log(`You lived ${secondsLived} seconds.`);

//Question 15
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();

console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
console.log(`${date}-${month}-${year} ${hour}:${minutes}`);
console.log(`${date}/${month}/${year} ${hour}:${minutes}`);
