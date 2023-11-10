//Question 1
class Dog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  getInfo() {
    let pronoun = this.gender == "Male" ? "He" : "She";
    return `${this.name} is ${this.age} years old.${pronoun} is ${this.color} in color and has ${this.legs} legs`;
  }
  speak() {
    return `${this.name} barks.`;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  getInfo() {
    let pronoun = this.gender == "Male" ? "He" : "She";
    return `${this.name} is ${this.age} years old.${pronoun} is ${this.color} in color and has ${this.legs} legs`;
  }
  speak() {
    return `${this.name} meows.`;
  }
}
let lucky = new Dog("Lucky", 35, "brown", 4, "Male");
let Kitty = new Cat("Kitty", 5, "white", 4, "Female");
console.log(lucky.getInfo());
console.log(lucky.speak());
console.log(Kitty.getInfo());
console.log(Kitty.speak());
