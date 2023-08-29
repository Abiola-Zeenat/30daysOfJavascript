

//Question 1
function fullName() {
  let firstName = 'Abiola';
  let lastName = 'Abdulsalam';
  console.log( firstName + ' ' + lastName);
}
fullName();

//Question 2
function myFullName(firstName, lastName) {
  return( firstName + ' ' + lastName);
}
console.log(myFullName('Abiola', 'Abdulsalam'));

//Question 3
function addNumbers(x,y) {
  return x + y;
}
console.log(addNumbers(5,8));

//Question 4
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(4,12));

//Question 5
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(4,12));

//Question 6
function volumeOfRectPrism(length, width, height) {
  let perimeter = length * width * height;
  return perimeter;
}
console.log(volumeOfRectPrism(4, 12, 6));

//Question 7
function areaOfCircle(r, pi = 3.142) {
  let area = pi * r * r;
  return area;
}
console.log(areaOfCircle(8))

//Question 8
function circumOfCircle(r, pi = 3.142) {
  let circumference = 2 * pi * r;
  return circumference;
}
console.log(circumOfCircle(8))

//Question 9
function density(mass, volume){
  let density = mass/volume;
  return density;
}
console.log(density(30,12));

//Question 10
function speed(){
  let distance = 20;
  let timeTaken = 24;
  let speed = distance/timeTaken;
  return speed;
}
console.log(speed());

//Question 11
function weight(mass, gravity= 9.81) {
  return weight = mass * gravity
}
console.log(weight(9));

//Question 12
function convertCelsiusToFahrenheit(cels){
let fahr = (cels * 9/5) +32;
return fahr
}
console.log(convertCelsiusToFahrenheit(36.8));

//Question 13
function calcBMI(weight,height) {
  let bmi = weight /(height * height)
  let weightGroup;
  if (bmi < 18.5) {
    weightGroup = 'underweight';
  } else if(bmi >= 18.5 && bmi <= 24.9) {
    weightGroup = 'Normal weight';
  }else if(bmi >= 25 && bmi <= 29.9) {
    weightGroup = 'Overweight';
  }else if(bmi >= 30) {
    weightGroup = 'Obese';
  }
  return (`Your bmi is ${bmi} and you are ${weightGroup}`);
}
console.log(calcBMI(75,1.6));

//Question 14
function checkSeason(month= 'february') {
  let season
  if (month == "september" || month == "october" || month == "november") {
    season ='Autumn';
    } else if (month == "december" || month == "january" || month == "february") {
        season ='Winter';
  } else if (month == "march" || month == "april" || month == "may") {
        season = 'Spring';
  } else if (month == "june" || month == "july" || month == "august") {
        season = 'Summer';
  }
  return `season: ${season}`
}
console.log(checkSeason('august'));
console.log(checkSeason());

//Question 15
function findMax() {
  let max = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if(arguments[i] > max){
      max = arguments[i];
    }  
  }
  return max;
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))