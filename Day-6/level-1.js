

//Question 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 11) {
  console.log(i);
  i++;
}
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 11);

//Question 2
for (let a = 10; a >= 0; a--) {
  console.log(a);
}

let a = 10;
while (a >= 0) {
  console.log(a);
  a--;
}
let b = 10;
do {
  console.log(b);
  b--;
} while (b >= 0);

//Question 3
let n = 15;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
//Question 4
let m = "#";
for (let i = 1; i <= 7; i++) {
  console.log(m);
  m += "#";
}

//Question 5
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
//Question 6
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}
//Question 7

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//Question 8
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Question 9
// for (let i = 0; i <= 100; i++) {
//   if (i % 1 === 0 && i % i === 0) {
//     console.log(i);
//   }

// }

//Question 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//Question 11
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
  if (i % 2 !== 0) {
    oddSum += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`
);

//Question 12
console.log([evenSum, oddSum]);

//Question 13
const randomArr = [];

for (let i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * 10);
  randomArr.push(num);
}
console.log(randomArr);

//Question 14
const randomNumArr = [];

for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 10);

  if (randomNumArr.includes(num)) {
    continue;
  }
  if (randomNumArr.length == 5) {
    break;
  }
  randomNumArr.push(num);
}
console.log(randomNumArr);

//Question 15
const randomId = function(length = 6) {
  return Math.random().toString(16).substring(2, length+2);
};
console.log(randomId());