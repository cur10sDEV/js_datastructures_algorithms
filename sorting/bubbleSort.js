const arr = [56, 45, 88, 2, 6, 99, 23, 19];

function bubbleSort(arr) {
	// noswaps for optimization
	let noSwaps;

	// swap function
	const swap = (arr, i, j) => {
		// temp = arr[i];
		// arr[i] = arr[i + 1];
		// arr[i + 1] = temp;
		// or
		[arr[i], arr[j]] = [arr[j], arr[i]];
	};

	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap takes place
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort(arr));

// Big O
// Best Case - O(n)
// Average Case - O(n**2)
// Worst Case - O(n**2)
