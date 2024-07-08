const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

var intToRoman = function (num) {
  let result = '', i;
  for(i in lookup) {
    while(num >= lookup[i]) {
      result = result + i;
      num -= lookup[i];
    }
  }
  return result;
};

console.log(intToRoman(9));
console.log(intToRoman(19));
console.log(intToRoman(57));
console.log(intToRoman(999));
