

const countries = [
  'Afghanistan','Albania', 'Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria',
  'Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia',
  'Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada',
  'Cape Verde','Central African Republic','Chad','Chile','China','Colombi','Comoros','Congo (Brazzaville)','Congo',
  'Costa Rica',"Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic',
  'East Timor (Timor Timur)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland',
  'France','Gabon','Gambia, The','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana',
  'Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan',
  'Kazakhstan','Kenya','Kiribati','Korea, North','Korea, South','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia',
  'Libya','Liechtenstein','Lithuania','Luxembourg','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta',
  'Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Morocco','Mozambique','Myanmar',
  'Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau',
  'Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda',
  'Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal',
  'Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa',
  'Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo',
  'Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates',
  'United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam', 'Yemen','Zambia',
  'Zimbabwe'
]

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Question 1
const totalProductPrice = products.map(product => product.price).filter(product => typeof product == 'number').reduce((acc, cur) => acc + cur, 0)
console.log(totalProductPrice);

//Question 2
const sumOfPrices = products.reduce(function(acc,cur){
 
  if (typeof cur.price === 'number'){
     acc += cur.price
  }
  return acc
},0)
console.log(sumOfPrices);

//Question 3
function categorizeCountries(arr, pattern){
  const samePatternCountries = arr.filter(c => c.includes(pattern))
return samePatternCountries;
}
console.log(categorizeCountries(countries, 'ia'));
console.log(categorizeCountries(countries, 'land'));
console.log(categorizeCountries(countries, 'Island'));
console.log(categorizeCountries(countries, 'stan'));

//Question 4

//Question 5
function getFirstTenCountries(){
  const firstTenCountries = countries.slice(0,10);
  return firstTenCountries
}
console.log(getFirstTenCountries());

//Question 6
function getLastTenCountries(){
  const lastTenCountries = countries.slice(countries.length-10,countries.length);
  return lastTenCountries
}
console.log(getLastTenCountries());

//Question 7
// const initialsArray = countries.map(country => country[0])
// console.log(initialsArray);
// let noOfInitialsArray = []
// initialsArray.forEach(function(letter){
//   noOfOccurence = letter.lastIndexOf() - letter.indexOf()
//   if(!(noOfInitialsArray['letter'].includes(letter))){
//     noOfInitialsArray.push(`{letter: ${letter}, counts = ${noOfOccurence}}`)
    
//   }
//   return noOfInitialsArray
// })
// console.log(noOfInitialsArray);