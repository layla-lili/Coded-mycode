numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],

  [4, 2, [6, 7, [2, 6, 1]]],
];

arraySum = (num) => {
  let sum = 0;
  for (let n = 0; n < num.length; n++) {
    if (num[n] instanceof Array) {
      sum += arraySum(num[n]);
    }
    if (num[n] === Math.round(num[n])) {
      sum += num[n];
    }
  }
  return sum;
};

console.log(arraySum(numbers));
