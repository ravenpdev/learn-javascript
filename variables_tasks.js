// Working with variables

// 1. Delcare two variables: admin and name
// 2. Assign the value "John" to name.
// 3. Copy the value from name to admin.
// 4. Show the value of admin using alert (must output "John").

let admin;
let name = "John";
admin = name;
console.log(name);


// Giving the right name

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

const ourPlanet = "Earth";
const currentUser = "Jane";

// Uppercase const?

// use uppercase for birthday since it will never change
const BIRTHDAY = '18.04.1982';
// age is calculate at runtime, someCode() evaluate at runtime.
const age = someCode(BIRTHDAY);

function someCode(birthday) {
  return birthday;
}
