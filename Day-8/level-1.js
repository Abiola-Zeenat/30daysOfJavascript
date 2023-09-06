//Question 1
const dog = {};

//Question 2
console.log(dog);

//Question 3
dog.name = 'Lucky';
dog.legs = 4;
dog.color = 'black';
dog.age = 32;
dog.bark = function() {
  return 'woof woof'
}

//Question 4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//Question 5
dog.breed = 'Rottweiler';
dog.getDogInfo = function () {
  let statement = `${this.name} is a ${this.color} ${this.breed} dog.\nHe has ${this.legs} Legs.\nHe is ${this.age} years old.`
  return statement
  
}
console.log(dog.getDogInfo());