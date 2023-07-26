//Question 1 - 10
let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.length);
challenge.toUpperCase();
challenge.toLowerCase();
challenge.substring(0, 2);
challenge.slice(3, 21);
challenge.includes("Script");
challenge.split("");
challenge.split(" ");

//Question 11
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
string.split(",");

//Question 12 - 16
challenge.replace("JavaScript", "Python");
challenge.charAt(15);
challenge.charCodeAt(11);
challenge.indexOf("a");
challenge.lastIndexOf("a");

//Question 17 - 19
let text =
  "You cannot end a sentence with because because because is a conjunction";
text.indexOf("because");
text.lastIndexOf("because");
text.search("because");

//Question 20
text = "  You are amazing  ";
text.trim();

//Question 21 - 25
challenge.startsWith("30");
challenge.endsWith("t");
challenge.match("a");
console.log("30 Days of".concat(" JavaScript"));
console.log(challenge.repeat(2));
