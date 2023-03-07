const arr = [56, 45, 88, 2, 6, 99, 23, 19];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // min-index
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      // if current element is lower than the minimum
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // swap only if there is new min element
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort(arr));

// =================================
// Big O

// Time Complexity
// Best Case - O(n**2)
// Average Case - O(n**2)
// Worst Case - O(n**2)

// Space Complexity
// O(1)

// =================================
