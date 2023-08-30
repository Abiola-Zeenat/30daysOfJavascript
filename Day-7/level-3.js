/* 



*/

// const prompt = require("prompt-sync")();

// //Question 1

// function userIdGeneratedByUser() {
//   let length = +prompt('enter no of characters: ');
//   let numOfId = +prompt('enter no of id to be generated: ');
// for (let i = 0; i < numOfId; i++) {
//   if(length <= 10){
//     console.log(Math.random().toString(36).substring(2, length+2));
//   }else{
//     console.log(Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2, length-9));
//   }
  
// }
// }
// userIdGeneratedByUser();

//Question 2
function rgbColorGenerator(){
let randNum1 = Math.floor(Math.random()*255) + 1;
let randNum2 = Math.floor(Math.random()*255) + 1;
let randNum3 = Math.floor(Math.random()*255) + 1;
console.log(`rgb(${randNum1},${randNum2},${randNum3})`);

// let rgb = 'rgb('
// for (let i = 0; i < 3; i++) {
//   let randnum = Math.floor(Math.random()*255) + 1;
  
//   if (i == 2){
//     rgb += `${randnum})`
//   }else{
//     rgb += `${randnum},`
//   }
// }
// console.log(rgb);

}
rgbColorGenerator();

//Question 3
function arrayOfHexaColors(params) {
 let arr = [];
 for (let i = 0; i < 5; i++) {
  arr.push("#" + Math.random().toString(16).substring(2, 8));
 }
 return arr;
}
console.log(arrayOfHexaColors());

//Question 4
function arrayOfRgbColors(params) {
  let arr = []; 
  for (let i = 0; i < 3; i++) {
    let randNum1 = Math.floor(Math.random()*255) + 1;
    let randNum2 = Math.floor(Math.random()*255) + 1;
    let randNum3 = Math.floor(Math.random()*255) + 1;
   arr.push(`rgb(${randNum1},${randNum2},${randNum3})`);
  }
  return arr;
 }
 console.log(arrayOfRgbColors()) ;

 //Question 5
 function convertHexaToRgb(hex) {
  
}

console.log(convertHexaToRgb("#0033ff"));

//Question 6
function componentToHexa(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function convertRgbToHexa(r, g, b) {
  return "#" + componentToHexa(r) + componentToHexa(g) + componentToHexa(b);
}
console.log(convertRgbToHexa(100,55,125));

//Question 7
function generateColors(type, n){
  let arr = []
  for (let i = 0; i < n; i++) {
    if (type == 'rgb'){
      let randNum1 = Math.floor(Math.random()*255) + 1;
      let randNum2 = Math.floor(Math.random()*255) + 1;
      let randNum3 = Math.floor(Math.random()*255) + 1;
     arr.push(`rgb(${randNum1},${randNum2},${randNum3})`);
    
    }else if (type == 'hexa'){
      arr.push("#" + Math.random().toString(16).substring(2, 8));
    }
    
  }
  return arr;
}
console.log(generateColors('hexa', 3)) 
console.log(generateColors('hexa', 1)) 
console.log(generateColors('rgb', 3)) 
console.log(generateColors('rgb', 1))

//Question 8
function shuffleArray(arr){
  let newArray = [];
  let indexArray =[];
  for (let i = 0; i < arr.length+10; i++) {
    let index = Math.floor(Math.random() * arr.length);
    
    if (indexArray.includes(index)){
      continue;
    }else if(indexArray.length == arr.length){
      break
    }else{
      indexArray.push(index);
      newArray.push(arr[index]);
    }
        
  }
  return newArray;
}
console.log(shuffleArray([1,2,3,4,5,6])) ;
console.log(shuffleArray(['yam','rice', 'beans', 'orange', 'meat','cereal'])) ;

//Question 9
function factorial(num){
  let factorial = 1;
for (let i = num; i > 0; i--) {
 factorial = factorial * i
  
}
return factorial
}
console.log(factorial(6));
console.log(factorial(10));

//Question 10
function isEmpty(par){
  if(par.length == 0){
    return true;
  }
  return false;
}
console.log(isEmpty(''));
console.log(isEmpty('day'));
console.log(isEmpty(4));

//Question 11
function sum(){
  let sum = 0;
  for (const num of arguments){
    sum += num;
  }
  return sum;
}
console.log(sum(4,6,7,9,4,8,2));

//Question 12
function sumOfArrayItems(arr){
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) == 'number'){
      sum += arr[i];
    }else{
      console.log('not a number');
    }

  }
  return sum;
}
console.log(sumOfArrayItems([5,1,2,true,4,5,7,4,'book']));

//Question 13
function average(arr){
  let sum = 0;
  let average;
  let noOfDigits= 0;
  for (let i = 0; i < arr.length; i++) {
    
    if(typeof(arr[i]) == 'number'){
      sum += arr[i];
      noOfDigits++;
      average = sum/(noOfDigits);
      
    }if (noOfDigits === 0) {
      average = 'The array does not contain numbers'
    }else{
      console.log('not a number');

    }

  }
  return average;
}
console.log(average([5,1,2,true,4,5,7,4,'book']));
console.log(average([true,'abiola','woman']));