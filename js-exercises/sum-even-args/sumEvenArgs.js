function sumEvenArgs(...inputArray) {
  let sumOfEvenArgs = 0;
  if (inputArray !== null) {
    inputArray.forEach(val => {
      if (val % 2 === 0) {
        sumOfEvenArgs += val;
      }
    });
    return sumOfEvenArgs;
  }
  return sumOfEvenArgs;
}

export { sumEvenArgs };