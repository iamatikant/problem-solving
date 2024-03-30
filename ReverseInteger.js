const x = 1534236469;
// Output: 321

var reverse = function(x) {
  let result;
  if(x<0) {
    x = x.toString().split('').slice(1).reverse().join('');
    result = Number(x) * -1;
    if(result < Math.pow(-2, 31)) return 0; 
    return result;
  } else {
    x = x.toString().split('').reverse().join('');
    result = Number(x);
    if(result < (Math.pow(2, 31) + 1)) return result;
    return 0;
  }
};

console.log(reverse(x), typeof reverse(x));