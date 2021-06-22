function findMax(sequence) {
  const {max, min} = Math;
  
  let max1 = max(sequence[0], sequence[1]);
  let max2 = min(sequence[0], sequence[1]);

  sequence.forEach(number => {
    if (number > max1) {
      max2 = max1;
      max1 = number;
    } else if (number > max2) {
      max2 = number;
    }
  })
  return [max1, max2];
}


console.log(findMax([1, 2, 3, 10, 100, 2, 4, 5]))