// Is "else" required?
// 
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }

// NOTE: No it still work the same, because it will only proceed if age < 18



// Rewrite the function using '?' or '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

function checkAge(age) {
  return (age > 18) ? true : console.log("Did parents allow you?");
}
checkAge(15);

function checkAge2(age) {
  return (age > 18) || console.log("Did parents allow you?");
}
checkAge2(15);



// Function min(a, b)
// Write a function min(a, b) which returns the least of two numbers a and b.

function min(a, b) {
  return (a < b) ? a : b;
}
console.log(min(10, 5));
console.log(min(3, 8));


console.log("\n ======== \n");


// Function pow(x, n)
// Write a function pow(x, n) that returns x in power n. Or, in other words, multiplies x by itself n times and return the result

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(3, 4));
console.log(pow(1, 100));
