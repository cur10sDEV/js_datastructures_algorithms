const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

function pivot(arr, start = 0, end = arr.length - 1) {
  // assuming pivot is always the first element
  let pivot = arr[start];

  // position index to which pivot element will swap place with
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    // every time you find an element less than (or equal to) pivot element
    if (arr[i] <= pivot) {
      // increment so that we can track where will the pivot index will go at the end;
      swapIndex++;
      // swap current element with swapIndex
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  // at last swap the pivot element with swapIndex and return it
  [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // call function recursively until there's left only one item sub-array
  if (left < right) {
    // returns the pivot index
    let pivotIndex = pivot(arr, left, right);

    // recursive call on the left sub-array
    quickSort(arr, left, pivotIndex - 1);

    // recursive call on the right sub-array
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort(arr));

// Note:- QuickSort is an in-place sorting algorithm i.e., we are not creating new arrays,
// we are simply changing the order of elements in the array with the help of start/end or left/right indexes

// =================================
// Big O

// Time Complexity
// Best Case - O(nlog(n))
// Average Case - O(nlog(n))
// Worst Case - O(n*n)

// Space Complexity
// O(log(n))

// =================================
