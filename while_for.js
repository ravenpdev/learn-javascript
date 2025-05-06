// The "while" loop

let  i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

i = 3;
while(i) {
  console.log(i);
  i--;
}


// The "do...while" loop
//
// The loop first execute the body, then check the condition, and, while it's truthy, execute it again ang again.

i = 0;
do {
  console.log("i: ", i);
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) {
  console.log("for loop: i = ", i);
}

// skipping parts
i = 0;
for (; i < 3; i++) {
  console.log(`skipping begin: ${i}`);
}

let x = 0;
for (; x < 3;) {
  console.log(`skipping the step part: ${x++}`);
}

// for(;;) {
//   // infinit loop
// }

// No break/continue to the right side of '?'
// NOTE: syntax constructs that are not expression cannot be used with the ternary operator '?'.
// if (i > 5) {
//   console.log(i);
// } else {
//   continue;
// }

// (i > 5) ? console.log(i) : continue;



// Labels for break/continue
// Sometimes we need to break out from multiple nested loops at once.

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("j: ", j);
    if (j == 2) break outer;
  }
}
console.log("Done!");
