
import countries from "./countries_data.js";

//Question 1
 //to extract lang from the languages property for each country object

 let lang = [];
 countries.forEach((c) => {
   lang.push(c.languages);
 });

 // to combine all language arrays into one single array
 let newlang = [];
 lang.forEach((l) => {
   for (let i = 0; i < l.length; i++) {
     const element = l[i];
     newlang.push(element);
   }
 });
  
 let newlangSet = new Set(newlang);
 console.log(`There are ${newlangSet.size} languages in the countries object file`);

//Question 2
const mostSpokenLanguages = (arr, n) => {
  //to extract lang from the languages property for each country object
  let lang = [];
  arr.forEach((element) => {
    lang.push(element.languages);
  });
  // to combine all language arrays into one single array
  let newlang = [];
  lang.forEach((l) => {
    for (let i = 0; i < l.length; i++) {
      const element = l[i];
      newlang.push(element);
    }
  });
  newlang.sort(); //to arrange the languages in alphabetical order

  //to get each unique language and the no of times it occurs in the array
  let newlangSet = new Set(newlang);
  
  const newlangArr = [];

  for (const l of newlangSet) {
    const filteredLang = newlang.filter((lng) => lng === l);
    
    newlangArr.push({ language: l, count: filteredLang.length });
  }
  newlangArr.sort((a, b) => {
    if (b.count < a.count) return -1;
    if (b.count > a.count) return 1;
    return 0;
  });
  
  //to get the ten most spoken languages
  const topMostSpokenLanguages = [];
  for (let i = 0; i < n; i++) {
    topMostSpokenLanguages.push(newlangArr[i]);
  }
  return topMostSpokenLanguages;
};

console.log(mostSpokenLanguages(countries, 10));

console.log(mostSpokenLanguages(countries, 3));





