
/* 
The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 
1.Slice the first ten countries from the countries 
array
Find the middle country(ies) in the countries array

Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/

 import { countries } from "./countries.js";

//Question 1
const ages = [19, 22, 19, 20, 24, 25, 26, 24, 25, 24];
let ageSize = ages.length;
//a
ages.sort();
let min = ages[0];
let max = ages[ageSize - 1];
console.log(ages, min, max);
//b
let medianAge;
if ((ageSize % 2) === 0) {
   medianAge = ages.slice((ageSize/2 -1),(ageSize/2 +1));
  
} else {
   medianAge = ages[(ageSize / 2) - 0.5]
  
}
console.log(medianAge);
//c
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  const age = ages[i];
      sum +=age; 
}
console.log(sum)
let averageAge = sum/ageSize;
console.log(averageAge);

//d
const range = max -min;
console.log(range);

//e
let diff1 = Math.abs(min - averageAge);
let diff2 = Math.abs(max-averageAge);
console.log(diff1 > diff2);

//Question 2
console.log(countries.slice(0,10));

//Question 3
let middleCountry;
let arrSize = countries.length;
if (arrSize % 2 === 0) {
  middleCountry = countries.slice((arrSize/2 -1),(arrSize/2 + 1))
  
} else {
  middleCountry = countries[arrSize/2 - 0.5]
}
console.log(middleCountry);

//Question 4
let arr1
let arr2
let splitCountries;
if (arrSize % 2 === 0) {
   arr1 = countries.slice(0, arrSize/2)
   arr2 = countries.slice(arrSize/2, arrSize)
 splitCountries = [arr1, arr2]
} else {
   arr1 = countries.slice(0, arrSize/2 + 0.5)
   arr2 = countries.slice(arrSize/2 + 0.5, arrSize)
   splitCountries = [arr1, arr2]
}
console.log(splitCountries);