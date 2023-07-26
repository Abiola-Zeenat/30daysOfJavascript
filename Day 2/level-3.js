//Question 1
let loveText='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveArray = loveText.match(/love/gi);
let loveCount = console.log(loveArray.length); //3


//Question 2
let becauseText = 'You cannot end a sentence with because because because is a conjunction';
let becauseArray = becauseText.match(/because/g);
let becauseCount = console.log(becauseArray.length); //3

//Question 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as \
educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s \
mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanSentence = sentence.replace(/ /gm,'space');
cleanSentence = cleanSentence.replace(/\W/gm,'');
cleanSentence =cleanSentence.replace(/space/gm," ")
let splitSentence = cleanSentence.split(' ');
sortedWords=splitSentence.sort();
let highestCount = 0;
  let mostFrequent = [];
sortedWords.forEach((word) => {
  // Count word
  const start = sortedWords.indexOf(word);
  const end = sortedWords.lastIndexOf(word);
  const count = end - start + 1;

  if (count > highestCount) {
    highestCount = count;
    mostFrequent = [word];
  }

  if (count === highestCount && !mostFrequent.includes(word)) {
    mostFrequent.push(word);
  }
});
console.log(sortedWords)
console.log(mostFrequent)


//Question 4
let text ="He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";
let digitInText = text.match(/\d+/g);
const monthlySalary = parseInt(digitInText[0]);
const annualBonus = parseInt(digitInText[1]);
const monthlyCourseIncome = parseInt(digitInText[2]);

let totalAnnualIncome = monthlySalary*12 + annualBonus + monthlyCourseIncome*12;
console.log(totalAnnualIncome) //250000
