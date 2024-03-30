/*

5. Longest Palindromic Substring
Medium
Topics
Companies
Hint
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   if(s.length === 1) return s;
//   let substring = '';
//   let reverseSubstring = '';
//   let internal = '';
//   let maxLength = 0;
//   let length = 0;
//   let result = s[0];
//   for(let i=0; i<s.length;i++) {
//     substring=s[i];
//     for(let j=i+1; j<s.length; j++) {
//       internal = s[j];
//       substring+=internal;
//       reverseSubstring = substring.split('').reverse().join('');
//       if(substring === reverseSubstring) {
//         length = substring.length;
//         if(length > maxLength) {
//           maxLength = length;
//           result = substring;
//         }
//       }
//     }
//   }
//   return result;
// };

var longestPalindrome = function(s) {
  if(s.length === 1) return s;
  let start = 0;
  let end = 1;
  let maxLength = 0;
  const checkPalindrome = (left, right) => {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      length = right -left + 1;
      if(length > maxLength) {
        maxLength = length;
        start = left;
        end = right;
      }
      left -= 1;
      right += 1;
    }
  }

  for(let i=0; i<s.length;i++) {
    checkPalindrome(i, i);
    checkPalindrome(i, i+1);
  }
  return s.substring(start, end+1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"));
