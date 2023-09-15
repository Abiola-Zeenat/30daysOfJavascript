

import countries from "./countries_data.js";

//Question 1
//Sort by name
countries.sort((a,b) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
})
console.log(countries);

//Sort by capital
countries.sort((a,b) => {
  if (a.capital < b.capital) return -1
  if (a.capital > b.capital) return 1
  return 0
})
console.log(countries);

//Sort by population
countries.sort((a,b) => {
  if (a.population < b.population) return -1
  if (a.population > b.population) return 1
  return 0
})
console.log(countries);

//Question 2

const mostSpokenLanguages = (arr, n) => {
  let lang = [];
     arr.forEach(element => {
       lang.push(element.languages)
     });

  let newlang = [];
  lang.forEach(l => {
    for (let i = 0; i < l.length; i++) {
      const element = l[i];
      newlang.push(element)
    }

  })
   newlang.sort()
   let newArr =[]
   let newSortedArr = []
   for (let i = 0; i < newlang.length; i++) {
    const element = newlang[i];
    const noOfOccurence = newlang.lastIndexOf(element) - newlang.indexOf(element) + 1
    
    if (newArr.includes(element)) {
      continue;
    } else {
      newArr.push(element);
       newSortedArr.push(`{language: ${element}}`, noOfOccurence)
    }
    
   }
   
  console.log(newSortedArr);
}
//To be continued ....
// mostSpokenLanguages(countries, 1)


//Question 3
const mostPopulatedCountries = (arr, n) => {
  let tenMostPopulatedCountries = []
  arr.sort((a,b) => {
    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
  })
  let arrLength = arr.length -1
 for (let i = arrLength; i > arrLength - n; i--) {
  const element = `{country: ${arr[i].name}, population: ${arr[i].population}}`;
  tenMostPopulatedCountries.push(element);
 }
 return tenMostPopulatedCountries
}

console.log(mostPopulatedCountries(countries, 10))
