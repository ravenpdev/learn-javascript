// toString(base)
// returns a string representation of num in the numeral sysem with the given base.
//
// Common use caess for this are:
//
// base=16 is used for hex colors, character encodings etc, digits can bbe 0..9 or A..F,
// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number, A funny, but useful case for 36 is when we need to turn a long numeric identifier into somethingg shorter,

let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));
console.log((123456).toString(36)); // could be written as (123456).toString()

// Rounding
//
// One of the most used operations when working with numbers is rounding.
//
// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes - 2.
//
// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
//
// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
//
// Math.trunc
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

// Roudn the number to n-th digit after the decimal.
//
// 1. Multiply and divide.
{
	let num = 1.23456;
	console.log(Math.round(num * 100) / 100);
}
// 2. The method toFixed(n) roudns the number to n digits after the point and returns a string.
// This rounds up or down to the nearest value, similar to Math.round
{
	let num = 12.34;
	let result = num.toFixed(1);
	console.log(typeof result);
	console.log(num.toFixed(1));

	// Please not that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:
	let n = 12.34;
	console.log(n.toFixed(5));
}

// Imprecise calculations
//
// Internally, a number is represented in 64-bit format IEE-754, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.
//
// If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity
{
	console.log(1e500);

	console.log(0.1 + 0.2 == 0.3); // false
	console.log(0.1 + 0.2);
	console.log(+(0.1 + 0.2).toFixed(2) === 0.3);
}

// Try running this
{
	// Hello! I'm a self-increasing number!
	console.log(9999999999999999);
	let value = 9999999999999999;
	console.log(typeof value);
}
// Tests: isFinite and isNaN
//
// Remember these two special numeric values?
// Infinity and -Infinity is a special numeric value that is greater than annything.
// NaN represents an error.

// isNaN(value) converts its argument to a number and then tests it for being NaN:
{
	console.log(isNaN(NaN));
	console.log(isNaN("str"));

	// The value NaN is unique in that it does not equal to anything, including itself:
	console.log(NaN === NaN);
}

// isFinite(value) converts its argument to a number and return true if it's a regular number, not NaN/Infinity/-Infinity:
{
	console.log(isFinite("15"));
	console.log(isFinite("str"));
	console.log(isFinite(Infinity));

	// Sometimes isFinite is used to validate whether a string value is a regular number:
	// let num = +prompt("Enter a number", "");
	// console.log(isFinite(num));
}

// Number.isNan and Number.isFinite
//
// are the more "strict" version of isNaN and isFinite functions. They do not autoconvert their arguments into a number, but check if it belongs to the number type instead.
{
	console.log(Number.isNaN(NaN));
	console.log(Number.isNaN("str" / 2));

	// Note the difference:
	console.log(Number.isNaN("str")); // false, because "str" belongs to the string type
	console.log(isNaN("str")); // true, because isNaN converts string "str" into a number and gets NaN as

	// Number.isFinite(value) returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity. In any other ase, it returns false.
	console.log(Number.isFinite(123)); // true
	console.log(Number.isFinite(Infinity)); // false
	console.log(Number.isFinite(2 / 0)); // false

	// Note the difference:
	console.log(Number.isFinite("123")); // false
	console.log(isFinite("123")); // true
}

// Comparison with Object.is
// There is a special buil-in method Object.is that compares values like ===, but is more reliable for two edge cases:
// 1. It works with NaN: Object.is(NaN, NaN) === true, that's a good thing.
// 2. Values 0 and -0 are different: Object.is(0, -0) === false, technically that's correct because internally the number has a sign bit that may be different even if all other bits are zeroes.
//
// In all other cases, Object.is(a, b) is the same as a === b.

// parseInt and parseFloat
// Numberic conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
{
	console.log(+"100px"); // NaN

	// parseInt and parseFloat read a number from a string until they can't. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:
	console.log(parseInt("100px"));
	console.log(parseFloat("12.5em"));
	console.log(parseInt("12.3"));
	console.log(parseFloat("12.3.4"));

	// There are situations when parseInt/parseFloat will return NaN. it happens when no digits could be read:
	console.log(parseInt("a1234"));

	// The second argument of parseInt(str, radix)
	console.log(parseInt("0xff", 16)); // 255
	console.log(parseInt("ff", 16)); // 255, without 0x also works
	console.log(parseInt("2n9c", 36)); // 123456
}

// Other math functions
//
// Math.random()
// Return a random number from 0 to 1 (not including 1)
{
	console.log(Math.random());
	console.log(Math.random());
	console.log(Math.round(Math.random() * 9) + 1);
}

// Math.max(a, b, c...) and Math.min(a, b, c...)
// Returns thte greatestt and smallest from the arbitrary number of arguments
{
	console.log(Math.max(3, 5, -10, 0, 1));
	console.log(Math.min(1, 2));
}

// Math.pow(n, power)
// Returns n raised to the given power.
console.log(Math.pow(2, 10));

// Tasks
//
// Create a script that prompts the visitor to enter two numbers and then show their sum.
// {
//   let num1 = +prompt("Enter first number: ", "");
//   let num2 = +prompt("Enter second number: ", "");

//   console.log(num1 + num2);
// }

// Repeat until the input is a number
// {
//   const readNumber = () => {
//      while (true) {
//       let input = prompt("Enter a valid number:", "");

//       if (input === "") {
//         return null;
//       }

//       if(isNaN(input)) {
//         continue;
//       } else {
//         return +input;
//       }
//     }
//   }

//   const result = readNumber();
//   console.log(result);
// }

// A random integer from min to max
{
	const randomInteger = (min, max) => {
		let rand = min + Math.random() * (max + 1 - min);

		return Math.floor(rand);
	};

	console.log(randomInteger(1, 5));
}
