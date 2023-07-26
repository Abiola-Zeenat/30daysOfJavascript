//Question 1
let quote =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\
by John Holmes teaches us to help one another.";
console.log(quote);

//Question 2
quote =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with \
charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote);

//Question 3
let str = "10",
  num = 10;
if (typeof str === typeof num) {
  return true;
} else {
  str = parseInt(str);
  console.log(typeof str === typeof num);
}

//Question 4
let dec = "9.8";
dec = parseFloat(dec);
if (dec === 10) {
  return dec;
} else {
  roundDec = Math.round(parseFloat(dec));
  console.log(roundDec);
}

//Question 5
console.log("python".includes("on"));
console.log("jargon".includes("on"));

//Question 6
let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("jargon"));

//Question 7 - 9

Math.round(Math.random() * 100);
Math.round(Math.random() * 50) + 50;
Math.round(Math.random() * 255);

//Question 10
let randNum = Math.round(Math.random() * 9);
let string = "JavaScript";
console.log(string[randNum]);

//Question 11
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

//Question 12
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
let start = phrase.indexOf("because"),
  end = phrase.indexOf("is");

console.log(phrase.substring(start, end));
