const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};


//Question 1

let skillLengthArray = []

for (const user in users) {
  let skills = users[user].skills
  let skillLength = skills.length;
  skillLengthArray.push([skillLength, user])
   
}
skillLengthArray = skillLengthArray.sort();
console.log(skillLengthArray);
let mostSkilled = skillLengthArray.at(-1)[1]

console.log(mostSkilled);

//Question 2

let loggedInUsers = 0;
let usersWith50pointsAbove = 0;
for (const user in users) {
  let isLoggedIn = users[user].isLoggedIn;
  let points = users[user].points
  if(isLoggedIn === true){
    loggedInUsers++
  }
  if(points >= 50){
    usersWith50pointsAbove++;
  }
   
}

console.log(`The number of logged in users is ${loggedInUsers} and users having 50 points or above are ${usersWith50pointsAbove}`);

//Question 3
 let MERNDevelopers = []

for (const user in users) {
  let skillArr = users[user].skills;
   if (skillArr.includes('MongoDB', 'Express', 'React', 'Node')) {
    MERNDevelopers.push(user)
      } 
}
  
console.log(MERNDevelopers);
 
//Question 4
const copyUsers = {...users};
copyUsers.Abiola ={
  email: 'azabiola@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
  age: 30,
  isLoggedIn: true,
  points: 50
}
console.log(copyUsers);

//Question 5
const keys = Object.keys(users)
console.log(keys);

//QUESTION 6
const values = Object.values(users)
console.log(values);


let user = [5, 24.8,9,570,1,3,87]
console.log(user.sort())
console.log(user.sort((a,b) => a-b));