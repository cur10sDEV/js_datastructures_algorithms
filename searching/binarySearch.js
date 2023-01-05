function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		if (val === arr[mid]) return mid;
		if (val < arr[mid]) right = mid - 1;
		if (val > arr[mid]) left = mid + 1;
		mid = Math.floor((left + right) / 2);
	}
	return -1;
}

// Big O
// Best Case - O(1)
// Average Case - O(log n)
// Worst Case - O(log n)

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 11));
