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


//max DOM node depth OR divEl.children.length

const treeDepth = (divEl, currentLevel) => {
  if (divEl.children.length === 0) return currentLevel;

  currentLevel += 1;
  let maxDepth = currentLevel;
  Array.from(divel.children).forEach(element => {
    maxDepth = Math.max(treeDepth(element, currentLevel), maxDepth)
  });

  return maxDepth;
}



function likes(array) {
  const arrayLength = array.length
  console.log(arrayLength)
  
  switch (arrayLength) {
    case arrayLength === 1:
      return `${array[0]} likes this`
    case arrayLength === 2:
      return `${array[0]} and ${array[1]} likes this`
    case arrayLength === 3:
      return `${array[0]}, ${array[1]} and ${array[2]} likes this`
    default:
      return 'no one likes this'
  }
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))