function binary_search(arr, item) {
  let low = 0; // left side of search range
  let high = arr.length - 1; // right side of search range
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // middle part of search range
    let guess = arr[mid];  // presumably element
    if (guess === item) { // if mission complete
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    };
  }
  return null; // if searched element is missing
};

const arr = [1, 3, 5, 7, 9];


console.log(binary_search(arr, 3)); // 1
console.log(binary_search([1, 2, 3, 4, 5], 1)) // 0
console.log(binary_search([1, 2, 3, 4, 5], 6)) // null