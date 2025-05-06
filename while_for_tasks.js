// Last loop value
//
// What is the last value alerted by this code? why?
let i = 3;
while (i) {
  console.log(i--); // i-- return the old value
}

let x = 3;
while (x) {
  console.log(--x); // --x return the new value 
}


// Which values does the while loop show?
//
// Both loops alert the same values, or not?
{
  let i = 0;

  // ++i increment and return the new value
  // 1 < 5 -> log(i) = 1
  // 2 < 5 -> log(i) = 2
  // 3 < 5 -> log(i) = 3
  // 4 < 5 -> log(i) = 4
  // 5 < 5 = false
  while (++i < 5) console.log(i);

  // My expected output:
  // 1, 2, 3, 4
}
{
  let i = 0;

  // i++ increment the i but return the old value
  //
  // 0 < 5 -> log(i) = 1
  // 1 < 5 -> log(i) = 2
  // 2 < 5 -> log(i) = 3
  // 3 < 5 -> log(i) = 4
  // 4 < 5 -> log(i) = 5
  while (i++ < 5) console.log(i);
}

// Which values get show by the "for" loop?
//
// log the same values, because the evaluated value of ++i/i++ is not used. 

for (let i = 0; i < 5; i++) console.log(i);
// 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) console.log(i);
// 0, 1, 2, 3, 4


// Output even numbers in the loop
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) continue;

  console.log(i);
}

// Repalce "for" with "while"
//
// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`)
// }
{
  let i = 0;

  while (i < 3) {
    console.log(`number ${i}!`);
    i++;
  }
}


// Output prime numbers
// n = 10, output: 2, 3, 5, 7

// function isPrime(n) {
//   if (n < 2) return false;

//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(Math.sqrt(2));

for (let i = 2; i < 10; i++) {
  // if (isPrime(i)) {
  //   console.log(i);
  // }

  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % 2 == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
