const arr = [24, 76, 14, -3, 7, 9, 65, -3, 33];

function merge(arr1, arr2) {
	let i = 0;
	let j = 0;
	const result = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log(mergeSort(arr));

// =================================
// Big O

// Time Complexity
// Best Case - O(nlogn)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)

// Space Complexity
// O(n)

// =================================
