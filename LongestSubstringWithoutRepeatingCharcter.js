// const s = " ";

// var lengthOfLongestSubstring = function(s) {
//   let len = 0;
//   let max = 0;
//   let alphabetCheck = new Map();
//   for(let i=0; i<s.length; i++) {
//     for(j=i; j<s.length; j++) {
//       if(alphabetCheck.get(s[j]) === undefined) {
//         len++;
//         alphabetCheck.set(s[j], true);
//       }
//       else {
//         len = 0;
//         alphabetCheck.set(s[j], undefined);
//         alphabetCheck = new Map();
//         break;
//       }
//       max = len > max ? len : max;
//     }
//     alphabetCheck.set(s[i], undefined);
//   }
//   return max;
// };

// console.log('___', s[0],'something');

// console.log(lengthOfLongestSubstring(s));

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/*******  Did now work ******/
// const longestSubstring = (word) => {
//   let result = '';
//   let len = 0;
//   let maxLength = 0;
//   const tempObj = {};
//   for(let i =0; i<word.length; i++) {
//     console.log('i: ', i);
//     const letter = word[i];
//     if(tempObj[letter] === undefined) {
//       tempObj[letter] = 'defined';
//       len += 1;
//       maxLength = len > maxLength ? len : maxLength;
//       console.log('tempObj: ', tempObj);
//     }
//     else {
//       console.log('length: ', len);
//       len = 0;
//       const index = word.indexOf(letter);
//       console.log("index: ", index);
//       i = index;
//       console.log('test i with index+1: ', i);
//       Object.keys(tempObj).forEach(key => delete tempObj[key]);
//     }
//   }
//   console.log(maxLength);
//   return maxLength;
// }

/******** Sliding approach ******/

// const longestSubstring = (word) => {
//   let start = 0;
//   let end = 1;
//   let len = word.length === 0 ? 0 : 1;
//   let maxLength = 0;
//   let currentSubstring = '';
//   for(let i=0; i<word.length; i++) {
//     currentSubstring += word[end];
//     if(word[end] !== word[start]) {
//       len = end - start + 1;
//       // console.log('word start: ', word[start], " word end: ", word[end], " length: ", len, " max-length: ", maxLength, " end: ", end, " start: ", start);
//       end += 1;
//       maxLength = len > maxLength ? len : maxLength;
//     }
//     else {
//       start += 1;
//       end = i;
//     }
//   }
//   return maxLength;
// }

var longestSubstring = function (word) {
  let end = 1;
  let currentSubstring = word[0];
  let maxLength = word.length === 1 ? 1 : 0;
  while (end < word.length) {
    if (currentSubstring.indexOf(word[end]) === -1) {
      currentSubstring += word[end];
      maxLength = Math.max(maxLength, currentSubstring.length);
      end += 1;
    } else {
      maxLength = Math.max(maxLength, currentSubstring.length);
      currentSubstring = currentSubstring.substring(1);
    }
  }
  return maxLength;
};

console.log(longestSubstring("dvdf"));
console.log(longestSubstring("atikant"));
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
