// Tasks

// What is the code below going to output?
console.log(null || 2 || undefined); // 2

// What wil lthe code below output?
//
// Explanantion:
// The first OR || evaluates ist left operand alert(1). That shows the first message with 1.
// The alert returns undefined, so OR goes on the second operand searching for a truthy value.
// The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
console.log(console.log(1) || 2 || console.log(3)); // 1, 2

// What is the result of AND?
console.log(1 && null && 2); // null

// What is the result of AND'ed?
console.log(console.log(1) && console.log(2)); // 1, undefined

// The result of OR AND OR
console.log(null || 2 && 3 || 4); // 3

// Write an if condition to check that age is between 14 and 90 inclusively.
// "Inclusively" means that age can read the eges 14 or 90.
let age = 14;

if (age >= 14 && age <= 90) {
  console.log("age is between 14 to 90");
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
age =13;
if (!(age >= 14 && age <= 90)) {
  console.log("not in range");
}

// What will the results of the expressions
if (-1 || 0) console.log("first");
if (-1 && 0) console.log("first");
if (null || - 1 && 1) console.log("third");

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or esc - show "cancelled", if it's another string - then show "I don't know you"

let user = prompt("Enter user: ");

if (!user) {
  console.log("Canceled");
} else if (user !== "Admin") {
  console.log("I don't know you");
} else {
  let password = prompt("Enter password: ");

  if (!password) {
    console.log("Canceled");
  } else if (password !== "TheMaster") {
    console.log("Wrong password");
  } else {
    console.log("Welcome!");
  }
}



// let result = something();
// console.log(result);

// function something() {
  
// }
