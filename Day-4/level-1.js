const prompt = require("prompt-sync")();

//Question 1
let userAge = +prompt("Enter your Age: ");
if (userAge > 18) {
  console.log(`You are old enough to drive`);
} else {
  console.log(`You are left with ${18 - userAge} years to drive`);
}

//Question 2
let yourAge = +prompt("Enter your Age: ");
let myAge = 30;
if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge}years older than me`);
}else{
  console.log(`You are ${myAge - yourAge}years younger than me`);
}

//Question 3
let a = 4;
  let b = 3;

  if (a > b) {
    console.log('a is greater than b');
    
  } else {
    console.log('a is less than b');
  }

  //using ternary operator
  a > b ? console.log('a is greater than b') : console.log('a is less than b');

  //Question 4
let num = +(prompt('Enter a number: '))
if ((num % 2) === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}
