function binarySearch(arr, val, left, right) {
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		if (val === arr[mid]) return mid;
		if (val < arr[mid]) right = mid - 1;
		if (val > arr[mid]) left = mid + 1;
		mid = Math.floor((left + right) / 2);
	}
	return -1;
}

// recursive version
function binarySearch(arr, val, left, right) {
	let mid = Math.floor((left + right) / 2);
	if (left <= right) {
		if (val === arr[mid]) return mid;
		if (val < arr[mid]) return binarySearch(arr, val, left, mid - 1);
		if (val > arr[mid]) return binarySearch(arr, val, mid + 1, right);
	}
	return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
console.log(binarySearch(arr, 21, 0, arr.length - 1));

// Big O
// Best Case - O(1)
// Average Case - O(log n)
// Worst Case - O(log n)
