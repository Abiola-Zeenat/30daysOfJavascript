 import { countries } from "./countries.js";
 import { webTechs } from "./web_Tech.js";


//Question 2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanText = text.replace(/ /gm,'space');
    cleanText = cleanText.replace(/\W/gm,'');
    cleanText = cleanText.replace(/space/gm, ' ');
let words = cleanText.split(' ');
console.log(words);
console.log(words.length);

//Question 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//a
if (!(shoppingCart.includes('Meat'))) {
  shoppingCart.unshift('Meat');
  console.log(shoppingCart);
}
//b
if (!(shoppingCart.includes('Sugar'))) {
  shoppingCart.push('Sugar');
  console.log(shoppingCart);
}
//c
shoppingCart.splice(4,1)
console.log(shoppingCart);
//d
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//Question 4
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia');

//Question 5
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS processor');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

//Question 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);