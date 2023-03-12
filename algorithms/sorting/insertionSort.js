const arr = [24, 76, 14, 9, 65, -3];

function insertionSort(arr) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    if (arr[j] < arr[j - 1]) {
      while (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        j--;
      }
    }
  }
  return arr;
}

// or

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentNum = i;
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[currentNum] < arr[j]) {
//         [arr[currentNum], arr[j]] = [arr[j], arr[currentNum]];
//         currentNum--;
//       }
//     }
//   }
//   return arr;
// }

console.log(insertionSort(arr));

// =================================
// Big O

// Time Complexity
// Best Case - O(n)
// Average Case - O(n**2)
// Worst Case - O(n**2)

// Space Complexity
// O(1)

// note
// insertion sort works very well if you need your data to be continously sorted that is new elements are being added to maintain a running sort

// =================================
