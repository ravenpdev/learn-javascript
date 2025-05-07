// The "switch" statement
//
// A switch statement can replace multiple if checks.

// The synax
//
// switch(x) {
//   case 'value':
//     ...
//     break;
//   default:
//     ...
//     break;
// }
//
// 1. The value of x is checked for a strict equality to the value from the first case. then to the second and so on.
// 2. If the equality is found, switch starts to execute the code starting from the corresponding case, until thte nearest break.
// 3. If no case is matched then the default code is executed.

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly!");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values.");
}


// Any expression can be a switch/case argument
// Both switch and case allow arbitrary expression.
{
  let a = "1";
  let b = 0;

  switch (+a) {
    case b + 1:
      console.log("this runs, because +a is 1, exactly equals b+1");
      break;
    default:
      console.log("This doesn't run");
  }
}

// Grouping of "case"
{
  let a = 3;

  switch (a) {
    case 4:
      console.log("Right!");
      break;
    case 3:
    case 5:
      console.log("Wrong!");
      console.log("Why don't you take a match class?");
      break;
    default:
      console.log("The result is strange. Really.");
  }
}


// Type Matters
//
// The equality check is always strict. The values must be of the same type to match.
{
  let value = "1";

  switch (value) {
    case "0":
    case "1":
      console.log("One or zero");
      break;
    case "2":
      console.log("Two");
      break;
    case 3:
      console.log("Never executes");
      break;
    default:
      console.log("An unknown value");
  }
}
