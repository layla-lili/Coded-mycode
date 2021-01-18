numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

const flatNumbers = numbers.flat(3);
let size = flatNumbers.length;

sumrec = (array) => {
  array = numbers.flat(3);
  arraysize = array.length;

  let sum = 0;
  for (let n = 0; n < size; n++) {
    if (arraysize) {
      sum += array[n];
    } else {
      sum += sumrec(array[n]);
    }
  }
  return sum;
};

console.log(sumrec(flatNumbers));
