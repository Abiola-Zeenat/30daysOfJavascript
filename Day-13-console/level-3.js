/* 
Check the speed difference among the following loops: while, for, for of, forEach
*/
import countries from "../Day-10-Maps and Sets/countries_data.js";

//Question 1
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.time("While loop");
let i = 0;
while (i < users.length) {
  console.log(users[i]["name"], users[i]["title"]);
  i++;
}
console.timeEnd("While loop");

console.time("Regular for loop");
for (let i = 0; i < users.length; i++) {
  console.log(users[i]["name"], users[i]["title"]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const { name, title } of users) {
  console.log(name, title);
}
console.timeEnd("for of loop");

console.time("forEach loop");
users.forEach(({ name, title }) => {
  console.log(name, title);
});
console.timeEnd("forEach loop");
