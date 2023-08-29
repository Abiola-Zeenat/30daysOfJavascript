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
function swapValues(x,y) {
  console.log(`x = ${y}, y = ${x}`);
    }
    swapValues(3,4);
    swapValues(4,5);

//Question 6
function reverseArray(arr) {
  let newArr =[]
  for (let i = arr.length-1; i >= 0; i--) {
     newArr.push(arr[i])
    
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]))

console.log(reverseArray(['A', 'B', 'C']))


//Question 7
function capitalizeArray(arr) {
  let newArr =[]
  for (let i = 0; i < arr.length; i++) {
     newArr.push(arr[i].toUpperCase())
    
  }
  return newArr;
}
console.log(capitalizeArray(['abiola', 'abdulsalam','lagos',]));

//Question 8


//Question 9

//Question 10

//Question 11

//Question 12

//Question 13

//Question 14
f;

//Question 15

//Question 16
