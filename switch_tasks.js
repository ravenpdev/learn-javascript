// Rewrite the "switch" into an "if"
//
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

let browser = "Firefox";

if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
  console.log("Okay we support these browsers too");
} else {
  console.log("WE hope that this page looks ok!");
}


// Rewrite "if" into "switch"
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

{
  let a = +"2";

  switch (a) {
    case 0:
      console.log("0");
      break
    case 1:
      console.log("1");
      break;
    case 2:
    case 3:
      console.log("2, 3");
      break;
  }
}
