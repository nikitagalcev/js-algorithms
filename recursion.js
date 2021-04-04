const testArr = [2, 4, 6, 10, 15, 10, -1, 6, 4, 20, 10, 1];

function sum(arr) {
  if (arr.length === 0) { // Базовый случай
    return 0;
  } else {
    const current = arr[0];
    const changedArr = arr.splice(1);
    return current + sum(changedArr);
  };
};

console.log(sum(testArr));

function countQuantity(arr) {
  if (arr.length === 0 ) {
    return 0;
  }
  return 1 + countQuantity(arr.splice(1));
};

console.log(countQuantity(testArr));

function findGreatest(arr) {
 if (arr.length === 1) {
   return arr[0];
 } else {
   if (arr[0] < arr[1]) {
     return findGreatest(arr.splice(1));
   } else {
     return findGreatest([arr[0]].concat(arr.splice(2)));
   };
 };
};

console.log(findGreatest(testArr));