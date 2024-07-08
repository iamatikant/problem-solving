var number = 3256875; //3257658


var nextLargestNumber = (number) => {
  let min = 0;
  let result = [];
  let numberArray = number.toString().split('');
  for(let i = numberArray.length - 1; i>=0; i--) {
    if(numberArray[i] > numberArray[i-1]) {
      debugger;
      let leftArray = numberArray.slice(0, i);
      let rightArray = numberArray.slice(i);
      let cruxElement = leftArray[leftArray.length-1];
      for(let j = 0; j < rightArray.length; j++) {
        if(rightArray[j] > cruxElement) {
          min = min > rightArray[j] ? rightArray[j] : min;
        }
      }
      let targetElementIndex = rightArray.indexOf(min);
      rightArray[targetElementIndex] = cruxElement;
      leftArray[leftArray.length-1] = min;
      rightArray = rightArray.sort((a, b) => b - a);
      result = leftArray.join('').concat(rightArray.join(''))
      console.log(result);
      result = Number(result);
    }
  }
  return result;
}

console.log(nextLargestNumber(number));