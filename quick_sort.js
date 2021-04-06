function quick_sort(arr) {
  if (arr.length < 2) { // Базовый случай 
    return arr; 
  } else {
    const pivot = arr.splice(0, 1); // Опорный элемент
    const less = []; // Элементы меньше опорного
    const greater = []; // Элементы больше опорного
    
    arr.forEach(item => {
      if (item <= pivot) {
        less.push(item);
      } else {
        greater.push(item);
      };
    });
    
    return (quick_sort(less).concat(pivot).concat(quick_sort(greater)));
  };
};

const testArr = [10, 2, 15, 48, 5, 11];

console.log(quick_sort(testArr));

