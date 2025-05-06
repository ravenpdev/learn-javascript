// Comparisons Operators
//
// >
// <
// >=
// <=
// ==
// !=
//
// Boolean is the result

console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

let result = 5 > 4;
console.log(result);

// String comparision
// JavaScript uses the so-called "dictionary" or "lexicographical" order.
console.log('Z' > 'A');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');

// The algorithm to compare two strings is simple:
//
// 1. Compare the first character of both strings.
// 2. If the first character from the first string is greater (or less) than the other string's, then the first string is greater (or less) than the second. We're done.
// 3. Otherwise, if both strings' first character are the same, compare the second character the same way.
// 4. Repeat until the end of either string.
// 5. If both string end at the same length, then they are equal. Otherwise, the longer string is greater.

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.
console.log('2' > 1);
console.log('01' == 1);

{
  let a = 0;
  console.log(Boolean(a)); // false

  let b = "0";
  console.log(Boolean(b)); // true

  console.log(a == b);
}

console.log('1' > 'Z');
console.log(1 > 'Z');
console.log(1 > null);
console.log(1 > undefined);

// Strict equality
// A regular equality check == has a problem. It cannot diffentiate 0 from false:
console.log(0 == false);
console.log('' == false);
// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

// A strict equality operator === checks the equality without type conversion.
console.log(0 === false);


// Comparison with null and undefined.
console.log(null === undefined); // false

// For a non-strict check ==
console.log(null == undefined);

// For maths and other comparsion < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN


// Strange result: null vs 0
//
// The reason is that equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false
//
// On the other hand, the equality check == for undefined and null is defined such that, without any conversion, they equal each other and don't equal anthing else.
{
  console.log(null > 0);          // false (1)
  console.log(null == 0);         // false (2)
  console.log(null >= 0);         // true (3)
  console.log(null == undefined); // true
}

// An incomparable undefined
// The value undefined shouldn't be compared to other values:
//
// We get these results because:
//
// 1. Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// 2. The equality check (3) returns false because undefined only equals null, undefined, and no other value.
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)
