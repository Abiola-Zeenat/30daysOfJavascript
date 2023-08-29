/*



*/

//Question 1

//Question 2

//Question 3
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([8, 7, 6, 5, 4]);

//Question 4
function showDateTime() {
  let date = new Date();
  let dateTime = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  console.log(dateTime);
}
showDateTime();

//Question 5
function swapValues(x, y) {
  console.log(`x = ${y}, y = ${x}`);
}
swapValues(3, 4);
swapValues(4, 5);

//Question 6
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

console.log(reverseArray(["A", "B", "C"]));

//Question 7
function capitalizeArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
}
console.log(capitalizeArray(["abiola", "abdulsalam", "lagos"]));

//Question 8
function addItem(item) {
  let itemArray = [];
   itemArray.push(item);
   return itemArray;
}

console.log(addItem('rice'));

//Question 9
function removeItem(index){
let arr = ['rice', 'banana', 'meat']
arr.splice(index,1)
return arr;
}
console.log(removeItem(1));

//Question 10
function sumOfNumbers(...nums){
let sum = 0;
for(const num of nums){
  sum += num;  
}
return sum;
}
console.log(sumOfNumbers(5,3,8,7,11,28));

//Question 11
function sumOfOdds(...nums){
  let sum = 0;
  for(const num of nums){
    if(num % 2 === 1){
      sum += num
    }
  }
  return sum;
}
console.log(sumOfOdds(5,3,8,7,11,28));

//Question 12
function sumOfEven(...nums){
  let sum = 0;
  for(const num of nums){
    if(num % 2 === 0){
      sum += num
    }
  }
  return sum;
}
console.log(sumOfEven(5,3,8,7,11,28));

//Question 13
function evensAndOdds(num){
  let odds = 0;
  let evens = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      evens += 1;
    } else {
      odds+=1;
    }
    
  }
  return (`The number of odds are ${odds}.\nThe number of evens are ${evens}`)
};
console.log(evensAndOdds(100));

//Question 14
function sum(...nums){
  let sum = 0;
  for(const num of nums){
    sum += num;  
  }
  console.log(sum);
  }
sum(5,3,8,7,11,28);
sum(1,2,3,4,5);

//Question 15

//Question 16
