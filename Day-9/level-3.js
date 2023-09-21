
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
  //to extract lang from the languages property for each country object
  let lang = [];
     arr.forEach(element => {
       lang.push(element.languages)
     });
// to combine all language arrays into one single array
  let newlang = [];
  lang.forEach(l => {
    for (let i = 0; i < l.length; i++) {
      const element = l[i];
      newlang.push(element)
    }

  })
   newlang.sort() //to arrange the languages in alphabetical order

   //to get each unique language and the no of times it occurs in the array
   let newArr =[]
   let newSortedArr = []
   for (let i = 0; i < newlang.length; i++) {
    const element = newlang[i];
    const noOfOccurence = newlang.lastIndexOf(element) - newlang.indexOf(element) + 1
    
    if (newArr.includes(element)) {
      continue;
    } else {
      newArr.push(element);
      let obj = {language :element , count : noOfOccurence }
       newSortedArr.push(obj)
    }
    
   }
   newSortedArr.sort((a,b) => {
    if (b.count < a.count) return -1
  if (b.count > a.count) return 1
  return 0
   })
 
   //to get the ten most spoken languages
  const tenMostSpokenLanguages = []
for (let i = 0; i < n; i++) {
  tenMostSpokenLanguages.push(newSortedArr[i])
  
}
return(tenMostSpokenLanguages);

}

console.log(mostSpokenLanguages(countries, 10));


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