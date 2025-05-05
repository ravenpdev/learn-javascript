// Basic operators, maths
//
//
// Terms: "unary", "binary", "operand"
//
// Terminology:
//
// - An operand - is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right oeprand is 2. 
// - An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;
x = -x;
console.log(x);
// An operator is binary if it has two operands. The same minus exists in binary from as well:
let a = 1, b = 3;
console.log(b - a); // 2, binary minus subtracts values

// Maths
// The following math operations are supported:
//
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **


// Remainder %
// The remainder operator %, despite its appearance, is not related to percents.
// The result of a % b is the remainder of the integer division of a by b.
console.log(5 % 2);
console.log(8 % 3);
console.log(8 % 4);

// Exponentation **
// The exponentiation operator a ** b raises a to the power of b.
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16

console.log(1 / 2);
console.log(1 / 3);
console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)


// Strings concatenation with binary +
//
// The binary + is the only operator that supports strings in such a way. Other arithmetic operators
// works only with numbers and always convert their operands to numbers.
let s = "my" + "string";
console.log(s);
console.log("1" + 2); // 12
console.log("2" + 1); // 21
console.log(2 + 2 + "1"); // "41"
console.log("1" + 2 + 2); // "122"
console.log(6 - "s"); // 4, converts '2' to a number
console.log("6" / "2"); // 3, converts both operands to numbers

// Numeric conversion, unary +
//
// The plus + exists in two forms: the binary form that we used above and the unary form.
//
// The unary plus or, in other words, the plus operator + applied to a single value, doesn't do anything to a number. But if the operand is not a number, the unary plus converts it into a number.

// NO effect on numbers
let num1 = 1;
console.log(+num1);

let num2 = -2;
console.log(+num2); // -2

// Converts non-numbers
// It actually does the same thing as Number(...), but is shorter
console.log(+true);
console.log(+"");

let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(+apples + +oranges); // unary plus applies first, try to convert to numbers, and then the binary plus sums them up.


// Assignment
// assignment operator has a low priority of 2. check for operator precedence
let assign = 2 * 2 + 1;
console.log(5);

// Assignment = returns a value
let val1 = 1;
let val2 = 2;
let val3 = 3 - (val1 = val2 + 1);
console.log(val1);
console.log(val3);

// Chaining assignments
// Evaluates from right to left.
let aa, bb, cc;
aa = bb = cc = 2 + 2;
console.log(aa, bb, cc);

// Modify-in-place
let n = 2;
n += 5; // short version of n = n + 5
n *= 2; // short version of n = n * 2
console.log(n);


// Increment/Decrement
let counter = 2;
counter++;
console.log(counter);
counter--;
console.log(counter);

// The operator ++ and -- can be placed either before or after a variable.
//
// Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
{
  let counter = 1;
  let a = ++counter;
  console.log(a); // 2
}
{
  let counter = 1;
  let a = counter++; // this return the old value
  console.log(a); // 1
}

// Bitwise operators
//
// Bitwise operators treat arguments as 32-bit integer number and work on the level of their binary representation. These operators are not JavaScript-specific.
//
// AND (&)
// OR (|)
// XOR (^)
// NOT (~)
// LEFT SHIFT (<<)
// RIGHT SHIFT (>>)
// ZERO-FILL RIGHT SHIFT (>>>)
{
  let a = 1;
  let b = 2;
  console.log("Bitwise AND &:",a & b); // 0
  console.log("Bitwise OR |:", a | b); // 3
  a = 5; // 0 1 0 1
  b = 3; // 0 0 1 1
  console.log("Bitwise XOR ^:", a ^ b); // 6
  a = 5;
  b = 3;
  console.log("Bitwise: NOT ~", ~a); // -6


  let num = 8; // 1 0 0 0
  num = num >> 3;
  console.log("Right shift:", num);
  num = 255;
  console.log("Right shift: >>", num >> 1);

  num = 1;
  num = num << 3;
  console.log("Left shift", num);
}

// Comma
// The comma operator, is one of the rarest and most unusual operators, Sometimes, it's used to write shorter code, so we need to know it in order to understand what's going on
//
// The comma operator allows us to evaluate serveral expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
{
  let a = (1 + 2, 3 + 4);
  console.log(a); // 7
}
