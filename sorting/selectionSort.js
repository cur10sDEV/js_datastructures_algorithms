const arr = [0, 2, 34, 22, 10, 19, 17];

function selectionSort(arr) {
	// swap function
	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	};

	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		// if currentIndex is same as minValue then do nothing swap otherwise
		if (i !== minIndex) swap(arr, i, minIndex);
	}
	return arr;
}

console.log(selectionSort(arr));

// Big O
// Best Case - O(n**2)
// Average Case - O(n**2)
// Worst Case - O(n**2)
