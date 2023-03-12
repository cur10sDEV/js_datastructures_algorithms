// Numbers
// sort in ascending order
const numArray = [6, 4, 15, 10];

// ascending function
const ascOrder = (a, b) => a - b;

// descending function
const descOrder = (a, b) => b - a;

// random sort
const randomSort = (a, b) => 0.5 - Math.random();

// sort methods accepts optional comparator function
// this works in following ways
// if a - b is negative a should come before b
// if a - b is positive a should come after b
console.log(numArray.sort(ascOrder));
console.log(numArray.sort(descOrder));
console.log(numArray.sort(randomSort));

// Strings
const strArray = ["steele", "colt", "data structures", "algorithms"];

// sort by length
const sortByLength = (a, b) => a.length - b.length;

console.log(strArray.sort(sortByLength));

// sort alphabetically
console.log(strArray.sort());
