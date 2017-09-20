// function abbreviate(string) {
//   // Get words from string
//   var newStr =
//     string.split(/\b/)
//     .map(function(word) {
//       return checkWord(word);
//     })
//     .join('');
//
//   function checkWord(word) {
//     // Check word length
//     // If length is < 4 do nothing
//     if (word.length < 4) {
//       return word;
//     } else {
//       // If length is >= 4 keep 1st and last letter and write the number of letter between
//       return word[0] + (word.length - 2).toString() + word[word.length - 1];
//     }
//   }
//   return newStr;
// }

// // Compact version
// function abbreviate(string) {
//   let newStr =
//     string.split(/\b/)
//     .map((word) => { return checkWord(word); })
//     .join('');
//
//   function checkWord(word) {
//     return (word.length < 4) ? word : word[0] + (word.length - 2).toString() + word[word.length - 1];
//   }
//   return newStr;
// }

// // More compact version
// function abbreviate(string) {
//   let newStr =
//     string.split(/\b/)
//     .map((word) => { return (word.length < 4) ? word : word[0] + (word.length - 2).toString() + word[word.length - 1]; })
//     .join('');
//   return newStr;
// }

//Best Practice
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);
}

console.log(abbreviate("elephant-rides are really fun!"));
