// Type Conversions
//
// Most of the time, operators and functions automatically convert the values given to them to the right type.
//
// For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers. 
//
// There are also cases when we need to explicitly convert a value to the expected type.


// String Conversion
// String conversion happens when we need the string form of a value.
// for example, alert(value) does it to show the value.
// We can also call the String(value) function to convert a value to a string:
let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);


// Numeric Conversion
// Numeric conversion in mathematical functions and expressions happens automatically.
// For example, when division / is applied to non-numbers:
console.log("6" / "2"); // 3, strings are converted to numbers
let str = "1234";
console.log(typeof str); // string
let num = Number(str); // becomes a number 1234
console.log(typeof num);
console.log(String(null));
console.log(String(undefined));

// Explicit conversion is usually required when we read a value from a string-based source like a text form but expectd a number to be entered.
console.log("1" + 1);
console.log(1 + "1");
console.log(1 + "2");
console.log(2 + "2");

// Numeric conversion rules:
//
// undefined      | NaN
// null           | 0
// true and false | 1 and 0
// string         | whitespaces (includes spaces, tabs \t, newlines \n etc). from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is "read" from the string. An error gives NaN.

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number("")); // 0
console.log(Number("10n")); // NaN
console.log(Number("10e+8")); // 1000000000


// Boolean Conversion
// Boolean conversion is the simplest one.
// It happens in logical operations (later we'll meet condition tests and other similar thingns) but can also be performed explicitly with a call to Boolean(value).
//
// The conversion rule:
// Values that are intuitively "empty", like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean("   "));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
