const x = 1222221;
// Output: true

var isPalindrome = function(x) {
  let testNumber = x;
  let sum = 0;
  while(x > 0) {
    sum = (sum * 10) + x%10;
    x = Math.floor(x/10);
  }
  if(sum === testNumber) {
    return true;
  }
  return false;
};

console.log(isPalindrome(x));



// const isPalindrome = (number) => {
//   const testNumber = number;
//   let sum = 0;
//   let unit = Math.pow(10,((number.toString().length)-1));
//   while(number >= 1) {
//     sum = sum + ((number % 10) * unit);
//     number = Math.floor(number/10);
//     unit = unit / 10;
//   }
//   console.log(sum);
//   return sum === testNumber ? true : false;
// }

// console.log(isPalindrome(-522222225));