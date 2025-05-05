"use strict";

// variable declaration
let message;
console.log(message);

// variable assignment
message = "hello world!";
console.log(message);

let user = "John", age = 25, msg = "hi";
console.log(user, age, msg);

let a = 5, b = 10;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

let hello = "Hello world!";
let world = hello;
console.log(hello);
console.log(world);
hello = "Something else";
console.log(hello);
console.log(world);

let s1 = "hello";

// note: no "use strict" in this, the variable "num" is created if it didn't exist
// with "use strict" will return error.
// num = 5;
// console.log(num); // ReferenceError num is not defined

// Constant
const myBirthday = "11.29.92";
// myBirthday = "hello"; // TypeError: Assignment to constant variable.

// Uppercase constants
// Values that are known before execution.
// Such constants are named using capital letters and underscores.
const COLOR_RED = "#F00";
