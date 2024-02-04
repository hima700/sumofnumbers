function sumFor(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function sumWhile(numbers) {
  let result = 0;
  let i = 0;
  while (i < numbers.length) {
    result += numbers[i];
    i++;
  }
  return result;
}

function sumRecursion(numbers, index = 0) {
  if (index === numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}

function sumTheSimpleWay(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
