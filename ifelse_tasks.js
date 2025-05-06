// Tasks

// if (a string with zero)
if ("0") {
  console.log("Hello"); // Hello
}

// The name of JavaScript
let officialName = "ECMAScript";
console.log((officialName.toLowerCase() == "ecmascript") ? "Right" : "You don't know? 'ECMAScript!'");

// Show the sign
let input = prompt("Enter a number: ");

console.log(+input);

if (+input >= 1) {
  console.log("Value is greater than zero.");
} else if (+input <= -1) {
  console.log("Value is less than zero.");
} else {
  console.log("Value is zero");
}

// Rewrite "if" into ?
//
// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }
let a = 1;
let b = 2;
let result = (a + b + 4) ? "Below" : "Over";
console.log(result);


// Rewrite 'if..else' into '?'
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = "";

console.log(
  (login === "Employee") ?
    "Hello" : (login === "Director") ?
      "Greetings" : (login === "") ?
        "No login": ""
);
