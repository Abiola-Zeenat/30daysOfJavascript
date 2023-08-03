//Question 1
const now = new Date();
const year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

if(month < 10){month = "0" + month}
if(date < 10){date = "0" + date}
if(hours < 10){hours = "0" + hours}
if(minutes < 10){minutes = "0" + minutes}
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);


