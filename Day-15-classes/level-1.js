//Question 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getInfo() {
    return `${this.name} is ${this.age} years old.${this.name} is ${this.color} in color and has ${this.legs} legs`;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

//Question 2
class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}
let lucky = new Dog("Lucky", 35, "brown", 4);
let Kitty = new Cat("Kitty", 5, "white", 4);
console.log(lucky.getInfo());
console.log(lucky.speak());
console.log(Kitty.getInfo());
console.log(Kitty.speak());
