let values = [31, 41, 59, 26, 41, 58];

for (let x = 0; x < values.length; x++) {
  let minIndex = x;
  for (let y = x + 1; y < values.length; y++) {
    if (values[y] < values[minIndex]) {
      minIndex = y;
    }
  }

  if (minIndex !== x) {
    let tmp = values[x];
    values[x] = values[minIndex];
    values[minIndex] = tmp;
  }
}

console.log(values);
