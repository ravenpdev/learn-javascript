// Conditional branching: if, '?'

let currentYear = new Date().getFullYear();
console.log(currentYear);

if (currentYear == 2025) {
  console.log("You are right");
}

// Boolean conversion
// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called "falsy" values.
// Other values become true, so they are called "truthy"
if (0) { // 0 isa falsy
  // will never run
}

if (1) {
  console.log("i was here!");
}

if (currentYear == 2015) {
  console.log("you guessed it right!");
} else {
  console.log("How can you be so wrong?");
}

if (currentYear < 2015) {
  console.log("Too early...");
} else if (currentYear > 2015) {
  console.log("Too late");
} else {
  console.log("Exactly");
}

let age = 33;

let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);


let message = (age < 3) ? "Hi, baby!" : (age < 18) ? "Hello!" : (age < 100) ? "Greetings!" : "What an unsual age!";
console.log(message);
