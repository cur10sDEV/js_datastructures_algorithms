function linearSearch(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) return i;
	}
	return -1;
}

const index = linearSearch([56, 53, 88, 22, 14, 6, 3, 99, 57, 45], 3);
console.log(index);

// Big O
// Best Case - O(1)
// Average Case - O(n)
// Worst Case - O(n)
