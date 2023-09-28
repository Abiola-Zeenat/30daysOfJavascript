/*
Iterate through the users array and get all the keys of the object using destructuring
Find the persons who have less than two skills
*/

const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  },
  
  ]

//Question 1
 
for (const { name, scores, skills, age} of users) {
  console.log( name, scores, skills, age);
}


//Question 2
let lessSkilledUsers = users.filter(user => user.skills.length < 2)
for (const { name } of lessSkilledUsers) {

  console.log( name );
}


 
