const prompt = require("prompt-sync")();

//Question 1


let monthInput = prompt("Enter a month: ");
month = monthInput.toLowerCase();

switch (month) {
  case 'january':
    console.log('January has 31 days.')
    break
  case 'february':
    console.log('February has 29 days.')
    break
  case 'march':
    console.log('March has 31 days.')
    break
  case 'april':
    console.log('April has 30 days.')
    break
  case 'may':
    console.log('May has 31 days.')
    break
  case 'june':
    console.log('June has 30 days.')
    break
  case 'july':
    console.log('July has 31 days.')
    break
    case 'august':
    console.log('August has 31 days.')
    break
    case 'september':
    console.log('September has 30 days.')
    break
    case 'october':
    console.log('October has 31 days.')
    break
    case 'november':
    console.log('November has 30 days.')
    break
    case 'december':
    console.log('December has 31 days.')
    break
  default:
    console.log('It is not a valid month.')
}
