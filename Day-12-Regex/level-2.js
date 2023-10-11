//Question 1
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not\
 love something which can give you all the capabilities to develop an application what else can you love.`;
let splitParagraph = paragraph.match(/\w+/gi);
let paragraphArray = [];
let paragraphSet = new Set(splitParagraph);

function tenMostFrequentWords(paragraph) {
  for (const w of paragraphSet) {
    const filteredword = splitParagraph.filter((word) => word === w);
    paragraphArray.push({ word: w, count: filteredword.length });
  }

  paragraphArray.sort((a, b) => {
    if (b.count < a.count) return -1;
    if (b.count > a.count) return 1;
    return 0;
  });

  //to get the ten most frequent words
  const tenMostFrequentWords = paragraphArray.splice(0, 10);

  return tenMostFrequentWords;
}

console.log(tenMostFrequentWords(paragraph));

//Question 2

//Question 3
