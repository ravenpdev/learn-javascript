"use strict";

// Arrow functions
let sum = (a, b) => a + b;

let double = (n) => n * 2;

let sayHi = () => console.log("Hello!");

let welcome = 15 < 18 ? () => console.log("Hello!") : () => console.log("Greetings!");

// Multiline arrrow functions
let something = (a, b) => {
  let result = a + b;
  return result;
};
