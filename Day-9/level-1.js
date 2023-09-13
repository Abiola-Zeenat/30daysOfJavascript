

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Question 1
'.forEach(): is used to execute the same code on every element in an array but does not change the array and it returns undefined.'
'.map(): executes the same code on every element in an array and returns a new array with the updated elements.'
'.filter(): checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.'
'.reduce(): reduce method of the array object is used to reduce the array to one single value.'

//Question 2
countries.forEach(country => console.log(country));

//Question 3
names.forEach(name => console.log(name))

//Question 4
numbers.forEach(number => console.log(number))

//Question 5
const countriesToUppercase= countries.map(country => country.toUpperCase());
console.log(countriesToUppercase);

//Question 6
const countriesLength = countries.map(country => country.length)
console.log(countriesLength);

//Question 7
const numberSquared = numbers.map(number => number ** 2)
console.log(numberSquared);

//Question 8
const namesToUppercase= names.map(name => name.toUpperCase());
console.log(namesToUppercase);

//Question 9
const productsToPrice = products.map(product => `${product.product} : $${product.price}`)
console.log(productsToPrice);

//Question 10
const countriesWithLand = countries.filter(country => country.includes('land'))
console.log(countriesWithLand);

//Question 11
const countriesWithSixCharacters = countries.filter(country => country.length === 6)
console.log(countriesWithSixCharacters);

//Question 12
const countriesWithSixCharactersAndMore = countries.filter(country => country.length >= 6)
console.log(countriesWithSixCharactersAndMore);

//Question 13
const countriesThatStartsWithE = countries.filter(country => country.startsWith('E'))
console.log(countriesThatStartsWithE);

//Question 14
const pricesWithValues = products.filter(product => typeof(product['price']) == 'number')
console.log(pricesWithValues);

//Question 16

//Question 17
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum);

//Question 18
const concatCountries = countries.reduce(function(acc,cur){
  if (cur === countries.at(-1)) {
    return acc +', and '+ cur
  } else {
    return acc +', '+ cur
  }
    
})
console.log(`${concatCountries} are north European countries`);

//Question 19

//Question 20
const NamesLength = names.some(name => name.length > 7);
console.log(NamesLength);

//Question 21
const landCountries = countries.every(country => country.includes('land'))
console.log(landCountries);

//Question 22

//Question 23
const countriesWithSixLetters = countries.findIndex(country =>country.length === 6)
console.log(countriesWithSixLetters);

//Question 24
const norway = countries.findIndex(country => country==='Norway')
console.log(norway);

//Question 25
const russia = countries.findIndex(country => country==='Russia')
console.log(russia);