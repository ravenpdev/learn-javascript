// Functions

function showMessage() {
  console.log("Hi from showMessage function");
}

showMessage();
showMessage();


// Local variables
// A variable declared inside a function is only visible inside that function.
function localVariable() {
  let message = "Hello, I'm JavaScript";

  console.log(message);
}
// If we try to access messag here! we will get an error
// console.log(message); // ReferenceError: message is not defined.

// Outer variables.
//
// A fucntion can access an outer variable as well,
let outerVar = 10;
function outerVariable() {
  // The function has full access to the outer variable. It can modify it as well.
  // outerVar = 25;

  // The outer variable is only used if there's no local with the one.
  let outerVar = 10;
  let message = `The value of outerVar is ${outerVar}`;
  console.log(message);
}
outerVariable();

// Global variables
//
// Variables declared outside of any function, such as the outer outerVar above, are called global.
//
// Global variables are visible from any function (unless shadowed by locals).


// Parameters
//
// We can pass arbitrary data to functions using parameters.
function sendMsg(from, text, to) {
  console.log(`\nSending.... message to ${to}\n Content: ${text}\n From: ${from}`);
}

sendMsg("raven", "Hi!", "kristine");

// if no argument it passed.
// the value of from, text, to will be undefined
sendMsg();


// We can specify the so-called "default" value for a parameter in the function declaration, using =:
function greeting(from, text = "no text given") {
  console.log(`${from} : ${text}`);
}
greeting("raven");
// The default value also jumps in if the parameter exists, but strictly equals undefined.
greeting("raven", undefined);


// Evaluation of default parameters
// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
// 
// In the example below, callBy() isn't called at all, if the text parameter is provied.
//
// On the other hand, it's independently called every time when text is missing.

function calledBy() {
  console.log("calledBy executed");
}

function caller(from, text = calledBy()) {
  console.log(from);
  console.log(text);
}
caller("me!");
caller("me!", "provied");


function show(count) {
  if (count === undefined) {
    console.log("empty");
  }
}
show(0);
show("");
show(false);
show(null);
show([]);
show();

console.log("\n\n");


function showCount(count) {
  console.log(count ?? "unknown");
}
showCount(0);
showCount("");
showCount([]);
showCount(null);
showCount();

let arr = [];


// Returning a value.
function sum(a, b) {
  return a + b;
}
let result = sum(1, 3);
console.log(result);
