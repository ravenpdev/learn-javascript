// "use strict";
// Function expressions
//
// In JavaScript, a function is not a "magical language structure", but a special kind of value.


// Function Declaration
function sayHello() {
  console.log("Hello");
}
sayHello();


// There is another syntax for creating a function that is called a Function Expression
// It wllows us to create a new function in the middle of any expression.

let sayHi = function() {
  console.log("Hi");
};
sayHi();


// Function is a value
// let's reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable
function again() {
  console.log("again");
}
console.log(again);

let func = again;

func();
again();

let sayAgain = function () {
  console.log("sayAgain");
};

let sayAgainCopy = sayAgain;
sayAgainCopy();
sayAgain();


// Callback function

function ask(question, yes, no) {
  let answer = "answer";

  if (answer) {
    yes();
  } else {
    no();
  }
}

function showCorrect() {
  console.log("You're correct");
}

function showIncorrect() {
  console.log("You're incorrect");
}

// using callbacks
ask("what is the answer: ?", showCorrect, showIncorrect);

// anonymous function expression as callbacks
ask(
  "What is the answer: ?",
  function () {
    console.log("correct");
  },
  function () {
    console.log("incorrect");
  }
);



// Function Declaration vs Function Expression
//
//
// A function expression is created when the execution reaches it and is usable only from that moment.
// Once the execution flow passes to the right side of the assignment let sum = function... - here we go, the function is created and can be used (assigned, called, etc) frm now on.
//
//
// 
// A function declaration can be alled earlier that it is defined.
// For example, a global function declaration is visible in the whole script, no matter where it is.
//
// That's due to interal algorithms. When JavaScript prepares to run the script, it first look for global function declaration in it and creates the functions. We can think of it as an "initialization stage".
//
// And after all function declaration are processed, the code is executed. So it has access to these functions.


sayWhat();
function sayWhat() {
  console.log("sayWhat function called");
}


// sayJS(); // ReferenceError: Cannot access 'sayJS' before initialization
// let sayJS = function() {
//   console.log("sayJS function called");
// }



// In strict mode, when a function declaration is within a code block, it's visible everywhere inside that block. But not outside of it.

let theAge = 16;

if (theAge < 18) {
  welcome();

  function welcome() { // Function Declaration is available everywhere in the block where it's declared.
    console.log("Hello!");
  }

  welcome();
} else {
  function welcome() {
    console.log("Greetings!");
  }
}
// welcome(); // error here


let welcome = (theAge < 18) ?
  function() { console.log("hello!"); } :
  function () { console.log("greetings"); };

welcome();
