function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return [];
  }

  let startNumber = start;
  let someArray = [];
  while (startNumber <= end) {
    someArray.push(startNumber);
    startNumber += step;
  }
  return (someArray);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));