const prompt = require("prompt-sync")();

//Question 1

let score = prompt("Enter student's score: ");

switch (true) {
  case score > 80 && score <= 100:
    console.log("Grade: A");
    break;
  case score > 70 && score <= 79:
    console.log("Grade: B");
    break;
  case score > 60 && score <= 69:
    console.log("Grade: C");
    break;
  case score > 50 && score <= 59:
    console.log("Grade: D");
    break;
  case score > 0 && score <= 49:
    console.log("Grade: F");
    break;
  default:
    console.log("No valid Grade");
}

//Question 2


let monthInput = prompt("Enter Month: ");
month = monthInput.toLowerCase();

if (month == "september" || month == "october" || month == "november") {
  console.log(`The season is Autumn`);

} else if (month == "december" || month == "january" || month == "february") {
  
  console.log(`The season is Winter`);
} else if (month == "march" || month == "april" || month == "may") {
  
  console.log(`The season is Spring`);
} else if (month == "june" || month == "july" || month == "august") {
  
  console.log(`The season is Summer`);
} else {
  console.log("you did not enter a valid month.");
}



//Question 3


let UserInput = prompt('What is the day today ?');
let day = UserInput.toLowerCase();

switch (day) {
  case 'monday':
    console.log('Monday is a working day')
    break
  case 'tuesday':
    console.log('Tuesday is a working day')
    break
  case 'wednesday':
    console.log('Wednesday is a working day')
    break
  case 'thursday':
    console.log('Thursday is a working day')
    break
  case 'friday':
    console.log('Friday is a working day')
    break
  case 'saturday':
    console.log('Saturday is a weekend')
    break
  case 'sunday':
    console.log('Sunday is a weekend')
    break
  default:
    console.log('It is not a week day.')
}


