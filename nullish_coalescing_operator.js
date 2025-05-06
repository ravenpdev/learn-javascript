// NUllish coalescing operator '??'
//
// ?? returns the first argument if it's not null/undefined. Otherwise, the second one.

let a  = null;
let b = 5;

let result = a ?? b; // same as result = (a !== null & a !== undefined) ? a : b;
console.log(result);

// The common use case for ?? is to provide a default value.
let user;
console.log(user ?? "Anonymous");


// || (OR) vs ??
//
// || returns the first truthy value
// ?? return the first  defined value
let number = 0;
console.log(number || 100); // 100
console.log(number ?? 100); // 0

// ?? is forbidden to use with || or && without explicit parenthesis
