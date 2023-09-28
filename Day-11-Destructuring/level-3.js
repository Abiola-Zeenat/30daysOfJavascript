/* 

*/
import countries from "../Day-10-Maps and Sets/countries_data.js";


//Question 1
 for (const {name, capital, population, languages} of countries) {
  console.log(name, capital, population, languages);
 } 

//Question 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, [, , jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)

//Question 3
function convertArrayToObject(arr) {
  const result = [];

  for (const value of arr) {
    const [name, skills, scores] = value;

    const arrObject = {
      name: name,
      skills: skills,
      scores: scores
    };

    result.push(arrObject);
  }

  return result;
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

console.log(convertArrayToObject(students));


//Question 4
const Student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = structuredClone(Student)
newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
newStudent.skills.backEnd.push({skill: 'Express', level: 9})
newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')

console.log(Student);
console.log(newStudent);
    

