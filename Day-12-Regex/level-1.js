/*

Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/

//Question 1
let str =
  "He earns 4000 euro fromsalary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let earnings = str.match(/\d+/g);
let yearlyEarnings = earnings.map((e) => (e !== "10000" ? e * 12 : +e));
let totalAnnualIncome = yearlyEarnings.reduce((acc, cur) => (acc += cur));
console.log(totalAnnualIncome);

//Question 2
let str1 =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,\
 0 at origin,4 and 8 in the positive direction.";
let points = str1.match(/-?\d/g).sort((a, b) => a - b);
console.log(points);
let distance = points.at(-1) - points[0];
console.log(distance);

//Question 3

function is_valid_variable(variable) {
  let pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  let result = pattern.test(variable);
  console.log(result);
}
is_valid_variable("first_name");
is_valid_variable("first-name");
is_valid_variable("1first_name");
is_valid_variable("firstname");
is_valid_variable("$firstname");
is_valid_variable("-firstname");
is_valid_variable("_firstname");
