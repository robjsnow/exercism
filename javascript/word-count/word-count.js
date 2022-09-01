//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (words) => {
let countWords = {}

words = words.toLowerCase().match(/\w+('\w+)?/g);
for(let word of words) {
  word = word.toLowerCase();
if (countWords[word])
{
  countWords[word]++
} else {
countWords[word] = 1;
}
}
return countWords;
};
