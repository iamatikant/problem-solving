const binarySearch = (sortedArray: number[], targetNumber: number, leftIndex: number = 0, rightIndex: number = sortedArray.length - 1) => {
  // let leftIndex: number = 0;
  // let rightIndex: number = sortedArray.length - 1;
  let middleIndex: number = (leftIndex + rightIndex) / 2;
  while(sortedArray[middleIndex] !== targetNumber) {
    if( targetNumber > sortedArray[middleIndex]) {
      binarySearch(sortedArray.slice(middleIndex), targetNumber, leftIndex = middleIndex)
    } else if(targetNumber < sortedArray[middleIndex]) {
      binarySearch(sortedArray.slice(0, middleIndex), targetNumber, rightIndex = middleIndex);
    }
  }
  return middleIndex;
}

let sortedArray: number[] = [1, 5, 7, 8, 9, 12, 14, 19, 23];
let targetNumber: number = 8;

console.log(binarySearch(sortedArray, 8));