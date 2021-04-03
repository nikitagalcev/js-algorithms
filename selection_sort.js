function find_smallest(arr) {
  let smallest = arr[0]; // Для хранения наименьшего значения
  let smallestIndex = 0; // Для хранения индекса наименьшего значения
  
  arr.forEach((item, idx) => { // Поиск наименьшего 
    if (item < smallest) {
      smallest = item;
      smallestIndex = idx;
    };
  });
  
  return smallestIndex;
};

function selection_sort(arr) { // Сортировка массива
  const newSortedArr = [];
  const sortingArr = [...arr]; // Копирование массива во избежание мутаций (splice)
  
  arr.forEach(i => { // Находит наименьший элемент в массиве и push в новый
    const smallestIndex = find_smallest(sortingArr); 
    newSortedArr.push(sortingArr.splice(smallestIndex, 1)[0]);
  });

  return newSortedArr;
};

const array = [10, 500, 5, 68, 1000, 23, 468, 50000];
const testArr = [5, 3, 6, 2, 10];

console.log(find_smallest(array));
console.log(selection_sort(testArr));