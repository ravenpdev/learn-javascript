"use strict";
// Javascript is dynamically typed, meaning that there exist data types, but variables are not bound to any of them.

let message = "hello";
console.log(typeof message);
message = 123456;
console.log(typeof message);


// Number
// The number type represents both integer and floatingn point numbers.
// Besides regular numbers, there are so-called "special numeric values" which also belong to this data type: Infinity, -Infinity and NaN.
//
// Infinity is a special value that's greater than any number.
// We can get it as a result of division by zero:
console.log(1 / 0);
console.log(Infinity); // Or just reference it directly
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation for instance:
console.log("not a nubmer" / 2); // NaN, such division is erroneous
// NaN is sticky. Any further mathematical operation on NaN returns NaN:
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN
console.log(NaN ** 0); // 1

// BigInt
// In JavaScript, the "nnumber" type cannot safely represent integer values larger than (2⁵³-1), or less than -(2⁵³-1) for negatives.
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 234567890123456789012345678901234567890n;
console.log(bigInt);
const notBigInt = 234567890123456789012345678901234567890;
console.log(notBigInt);

// Strings
// A string in JavaScript must be surrounded by quotes.
//
// In JavaScript, there is no char type. There's only one type: string. A string may consist of zero characters (be empty), one character or many of them.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can ember another ${str}`;
console.log(`the typeof: ${typeof str2}`);

let strWithEmoji = "Smile😀";
console.log(strWithEmoji[5]); // not safe to access each character using index.
for (let c of strWithEmoji) {
  console.log(c);
}


// Boolean (logical type)
// The boolean type has only two values: true and false.
let nameFieldChecked = true;
let ageFieldChecked  = false;
// Boolean values also come as a result of comparisons
let isGreater = 4 > 1;
console.log(isGreater);


// The "null" value
// The special null value does not belong to any of the types.
// it forms a separate type of its own which contain only the null value:
//
// In JavaScript, null is not a "reference to a non-existing object" or a "null pointer" like in some other languages.
// It's just a special value which represents "nothing", "empty" or "value unknown".
let age = null; // age is defined but the value is unknown
console.log(age);


// The "undefined" value
// The special value undefined also stands aparat. It makes a type of its own, just like null.
// The meaning of undefined is "value is not assigned"
//
// Normally, one suses null to assign an "empty" or "unknown" value to a variable, while undefined is reserved as a default initial value for unassigned things.
let secretNumber; // undefined no value was assigned.
console.log(secretNumber);
// or assigned the undefined directly to a variable.
let random = undefined;
console.log(random);

// Objects and Symbols
// The object type is special.
// All other types are called "primitive" because their values can contain only a single thing(be it a string or number or whatever). In contrast, objects are used to store collections of data and more complex entities.

// Symbols
// The symbol type is used to create unique identifiers for objects.


// The typeof oeprator
// The typeof operator returns the type of the operand. It's useful when we want to process values of different types differently or just want to do a quick check.

console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof "foo"); // string
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object typeof is wrong here!
console.log(typeof console.log); // function, but there is no function type
