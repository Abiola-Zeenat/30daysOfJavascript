//Question 1
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as \
educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(sentence) {
  let result = sentence
    .replace(/ /gm, "space")
    .replace(/\W/g, "")
    .replace(/space/g, " ");
  return result;
}
let cleanedText = cleanText(sentence);

//b
function mostFrequentWords(text) {
  let splitText = text.match(/\w+/gi);
  let textSet = new Set(splitText);
  let textArray = [];

  for (const w of textSet) {
    const filteredword = splitText.filter((word) => word === w);
    textArray.push({ word: w, count: filteredword.length });
  }

  textArray.sort((a, b) => {
    if (b.count < a.count) return -1;
    if (b.count > a.count) return 1;
    return 0;
  });

  //to get the most frequent words
  const mostFrequentWords = textArray.splice(0, 3);

  return mostFrequentWords;
}
console.log(mostFrequentWords(cleanedText));
