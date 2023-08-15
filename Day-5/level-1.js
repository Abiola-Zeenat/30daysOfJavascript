/* 
Filter out companies which have more than one 'o' without the filter method

*/

//Question 1
const emptyArray = Array();

//Question 2
const numArray = [8, 7, 6, 5, 3, 6, 4]

//Question 3
numArrayLength = numArray.length;
console.log(numArrayLength);

//Question 4
let firstItem = numArray[0];
let middleItem = numArray[(numArrayLength/2) -0.5];
let lastItem = numArray[numArrayLength-1];
console.log(firstItem, middleItem, lastItem);

//Question 5
const mixedDataTypes = ['Abiola', 'Abdulsalam', 30, true, {skills: ['HTML', 'CSS', 'JS', 'React']}, ['orange', 'banana', 'apple']]

//Question 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Question 7
console.log(itCompanies);

//Question 8
console.log(itCompanies.length);

//Question 9
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[(itCompanies.length/2) -0.5];
let lastCompany = itCompanies[itCompanies.length-1];
console.log(firstCompany, middleCompany, lastCompany);

//Question 10
for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i]; 
  console.log(company);
}

//Question 11
for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  companyUpperCase = company.toUpperCase();
  console.log(companyUpperCase);
}

//Question 12
itCompanies.length = 6;
let companyString = itCompanies.join(', ')
//lastCompany = amazon,this has been declared in question 9
console.log(`${companyString} and ${lastCompany} are big IT companies`);

//Question 13
if (itCompanies.includes('Apple')) {
  console.log('Apple');
} else {
  return 'A company is not found';
}
 
//Question 14
//console.log(company.match(/\o+/gi));


//Question 15
itCompanies.push('Amazon')
itCompanies.sort();
console.log(itCompanies);

//Question 16
console.log(itCompanies.reverse());

//Question 17

console.log(itCompanies.slice(0,3));

//Question 18
console.log(itCompanies.slice(4,7));

//Question 19
console.log(itCompanies.slice(3,4));

//Question 20
itCompanies.shift();
console.log(itCompanies);

//Question 21
itCompanies.splice(2,2);
console.log(itCompanies);

//Question 22
itCompanies.pop();
console.log(itCompanies);

//Question 23
itCompanies.splice(0);
console.log(itCompanies);



