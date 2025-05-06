// Logical operators

// || (OR)
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// If an operand is not a boolean, it's converted to a boolean for the evaluation.
if (1 || 0) {
  console.log("truthy!");
}
// OR "||" finds the first truthy value
// 1. Evaluates operand from left to right.
// 2. For each operand, converts it to boolean. If the result is true, stops and return the original value of that operand.
// 3. If all operands have been evaluated, return the last operand.
console.log(1 || 0);                 // 1
console.log(null || 1);              // 1
console.log(null || 0 || 1);         // 1
console.log(undefined || null || 0); // 0

console.log(true || "Hello");
console.log(false || "printed");


// && (AND)
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

// AND "&&" finds the first falsy value
// 1. Evaluates oeprand from left to right.
// 2. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// 3. If all operands have been evaluated (i.e all were truthy), returns the last operand.
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "no matter what");


// NOTE: Precedence of AND && is higher than OR ||


// ! (NOT)
//
// The operator accepts a single argument and does the following:
// 1. Converts the operand to boolean type: true / false.
// 2. Return the inverse value.
console.log(!true);
console.log(!0);

// A double NOT !! is sometimes used for converting a value to boolean type:
console.log(!!"non-empty string");
console.log(!!null);
