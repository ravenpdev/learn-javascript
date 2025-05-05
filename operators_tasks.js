// Tasks


// What are the final values of variables a, b, c and d after the code below?
{
  let a = 1, b = 1;

  let c = ++a;
  let d = b++;

  console.log(c);
  console.log(d);
  console.log(a);
  console.log(b);
}


// Assignment result
// What are the values of a and x after the code below?
{
  let a = 2;
  let x = a + (a *= 2);
  console.log(x);
}

// Type conversions
// What are results of these expressions?
{
  console.log("" + 1 + 0); // 10
  console.log("" - 1 + 0); // -1
  console.log(true + false); // 1
  console.log(6 / "3"); // 2
  console.log("2" * "3"); // 6
  console.log(4 + 5 + "px"); // 9px
  console.log("$" + 4 + 5); // $45
  console.log("4" - 2); // 2
  console.log("4px" - 2); // NaN
  console.log("  -9  " + 5); // "  -9  5"
  console.log("  -9  " - 5); // -14
  console.log(null + 1); // null becomes 0
  console.log(undefined + 1); // undefined becomes NaN
  console.log("\t\n" - 2); // empty space becomes 0 -2
}

// Fix the addition

// node operators_tasks.js will not works since it is not support browser api
// if you wan to run this in terminal use bun: bun operators_tasks.js
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

console.log(+a + +b);
console.log(Number(a) + Number(b));
