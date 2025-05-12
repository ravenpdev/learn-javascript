// Optional chaining '?.'
//
// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn't exist.
//
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

let user = {};
// console.log(user.address.street); // TypeError: cannot read undefined property
console.log(user.address?.stree); // undefined

// Short-circiting
// As it was said before, the ?. immediately stops ("shorts-circuits") the evaluation if the left part doesn't exist.

user = null;
let x = 0;

user?.sayHi(x++);
console.log(x);


// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

let key = "firstName";
let user1 = {
  firstName: "John"
};
let user2 = null;
console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

delete user?.name; // delete user.name if user exists.


// We can use ?. for safe reading and deleting, but not writing
let user3 = null;
user3?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
