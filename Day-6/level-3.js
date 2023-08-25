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
webTechs.sort();
mernStack.sort()
console.log(webTechs);
console.log(mernStack);

//Question 4
const landCountries = [];
for (const country of countries) {
  if (country.includes("land")) {
    landCountries.push(country);
  }
}
console.log(landCountries);

//Question 5
const countryLength = [];

for (const country of countries) {
  countryLength.push(country.length);
}

const longestCountry = [];
countryLength.sort();
console.log(countryLength);
for (const country of countries) {
  if (country.length === countryLength[countryLength.length - 1]) {
    longestCountry.push(country);
  }
}
console.log(longestCountry);

//question 6
const fourCharCountries = [];

for (const country of countries) {
  if (country.length === 4) {
    fourCharCountries.push(country);
  }
}
console.log(fourCharCountries);

//question 6
const above2CharCountries = [];

for (const country of countries) {
  if (country.length >= 2) {
    above2CharCountries.push(country);
  }
}
console.log(above2CharCountries);

//Question 7
countries.reverse();
const newCountries = [];
for (const country of countries) {
let newCountry = country.toUpperCase();
newCountries.push(newCountry)
}
console.log(newCountries);