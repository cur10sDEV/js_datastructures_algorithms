// ======> Warning
// Currently not compatible with negative numbers
// <======

// ==========> helper functions <============

// returns a specific place-value digit
function getDigit(num, place) {
  // let currentPlace = 0;
  // let divisor = 10;
  // let tempNum = Math.abs(num);
  // let numAtCurrentPlace = 0;
  // while (currentPlace <= place) {
  //   numAtCurrentPlace = tempNum % divisor;
  //   tempNum = Math.floor(tempNum / divisor);
  //   currentPlace++;
  // }
  // return numAtCurrentPlace;

  // or

  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// returns no of digits in a num
function digitCount(num) {
  if (num === 0) return 1;
  // let tempNum = Math.abs(num);
  // let noOfDigits = 0;
  // while (tempNum > 0) {
  //   tempNum = Math.floor(tempNum / 10);
  //   noOfDigits++;
  // }
  // return noOfDigits;

  // or

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// returns no of digits of largest number in a list
function mostDigits(arr) {
  let maxDigits = 0;
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

const arr = [1234, 676, 324, 97845, 55, 0, 1200, 986];

function radixSort(arr) {
  let maxDigitsCount = mostDigits(arr);
  for (let k = 0; k <= maxDigitsCount; k++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      let digit = getDigit(num, k);
      digitsBucket[digit].push(num);
    }
    arr = [].concat(...digitsBucket);
  }
  return arr;
}

console.log(radixSort(arr));

// my flaws are what wake me up in the morning and all night

// Note:- can only be used with numerical data

// =================================
// Big O

// Note:- k here is the max digit count of any given numbers list
// Time Complexity
// Best Case - O(nk)
// Average Case - O(nk)
// Worst Case - O(nk)

// Space Complexity
// O(n+k)

// =================================
