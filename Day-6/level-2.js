const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];


//Question 1

const randomId = function() {
  return(Math.random().toString(36).substring(2));
};
console.log(randomId());

//Question 2
const randomHexaId = function(length=6) {
  return('#'+Math.random().toString(16).substring(2, length+2));
};
console.log(randomHexaId());

//Question 3
let randNum1 = Math.floor(Math.random()*255) + 1;
let randNum2 = Math.floor(Math.random()*255) + 1;
let randNum3 = Math.floor(Math.random()*255) + 1;
console.log(`rgb(${randNum1},${randNum2},${randNum3})`);

//Question 4
const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr);

//Question 5
const countryLength = [];

for (const country of countries) {
  countryLength.push(country.length);
}

console.log(countryLength);

//Question 6
const arrInfo = [];
for (const country of countries) {
  let short = country.slice(0, 3);
  short = short.toUpperCase();
  let countryInfo = [country, short, country.length];
  arrInfo.push(countryInfo);
}
console.log(arrInfo);

//Question 7
const landCountries  = countries.filter((country) =>
country.includes('land')
)
if (landCountries.length == 0) {
  console.log("All these countries are without land");
} else {
  console.log(landCountries);
}

//Question 8
const iaCountries = [];
for (const country of countries) {
  if (country.endsWith("ia")) {
    iaCountries.push(country);
  }
}
if (iaCountries.length == 0) {
  console.log("These countries ends without ia");
} else {
  console.log(iaCountries);
}

//Question 9
const longestCountry = [];
countryLength.sort();
console.log(countryLength);
for (const country of countries) {
  if (country.length === countryLength[countryLength.length - 1]) {
    longestCountry.push(country);
  }
}
console.log(longestCountry);

//Question 10
const fiveLetterCountries = [];

for (const country of countries) {
  if (country.length === 5) {
    fiveLetterCountries.push(country);
  }
}
console.log(fiveLetterCountries);

//Question 11

const stackLength = [];
for (const stack of webTechs) {
  stackLength.push(stack.length);
 }
stackLength.sort((a, b)=> a - b);

const longestStack = [];
for (const stack of webTechs) {
  if (stack.length === stackLength[stackLength.length - 1]) {
    longestStack.push(stack);
  }
}

console.log(longestStack);

//Question 12
const stackInfo = [];
for (const stack of webTechs) {
  
  let techInfo = [stack, stack.length];
  stackInfo.push(techInfo);
}
console.log(stackInfo);

//Question 13
const newarr = []
for (const stack of mernStack) {
  newarr.push(stack[0]);
}
console.log(newarr.join(''));

//Question 14
for (const stack of webTechs) {
console.log(stack);
}

//Question 15
const fruit = ['banana', 'orange', 'mango', 'lemon']
const newFruit =[]
for (let i = fruit.length-1; i >= 0; i--) {
 newFruit.push(fruit[i]);
  
}
console.log(newFruit);

//Question 16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (const stack of fullStack) {
 
  let newStack = stack.join();
  
console.log(newStack);
  }
  

  export {countries, webTechs, mernStack};