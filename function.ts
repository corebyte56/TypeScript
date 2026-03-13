// TypeScript Example
// In TypeScript we define the data type of parameters and return value

function sumOfThreeNumbers(a: number, b: number, c: number): number {
  let sum = a + b + c;
  return sum;
}

// In JavaScript we don't define types
// function sumOfThreeNumbers(a, b, c) {
//   let sum = a + b + c;
//   return sum;
// }

// Input values
let a = 5;
let b = 4;
let c = 2;

// Call the function
let sumOfNumber = sumOfThreeNumbers(a, b, c);

// Print result
console.log(sumOfNumber);
