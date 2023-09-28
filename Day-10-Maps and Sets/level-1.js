
const countries = ['Finland', 'Sweden', 'Norway']

//Question 1
const emptySet = new Set()

//Question 2
const numberSet = new Set()
for (let i = 0; i <= 10; i++) {
  numberSet.add(i)
  
}
console.log(numberSet);

//Question 3
 numberSet.delete(8) 
 console.log(numberSet); 

//Question 4
numberSet.clear()
console.log(numberSet.size);

//Question 5
const arr = ['Abiola', 'Abdulsalam', 'Lagos', 'Nigeria', 'female']
const setOfArr = new Set(arr);
console.log(setOfArr.size);

//Question 6 Create a map of countries and number of characters of a country
const mapOfCountries = new Map()
mapOfCountries.set('Nigeria', 'Nigeria'.length)
mapOfCountries.set('Helsinki', 'Helsinki'.length)
mapOfCountries.set('Norway', 'Norway'.length)
mapOfCountries.set('South Africa', 'SouthAfrica'.length)
mapOfCountries.set('Afghanistan,', 'Afghanistan,'.length)

console.log(mapOfCountries);