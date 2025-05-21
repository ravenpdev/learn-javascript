// Arrays

// Declarations
{
  let arr = new Array();
  let arr2 = [];

  console.log(arr, arr2);

  let fruits = ["Apple", "Orange", "Plum"];
  console.log(fruits);

  // We can get an element by its number in square brackets
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);

  // Replace an element
  fruits[2] = "Pear";
  // Or add a new element
  fruits[3] = "Lemon";
  console.log(fruits);
  console.log(fruits.length);
}

// An array can store elements of any type.
{
  let arr = [
    "Apple",
    { name: "John" },
    true,
    function () {
      return "Hello";
    },
  ];
  console.log(arr[1].name);
  console.log(arr[3]());
}

// Get last elements with "at"
{
  let fruits = ["apple", "orange", "plum"];
  console.log(fruits[fruits.length - 1]);
  console.log(fruits.at(-1));

  // This will not work in javascript, because the index in square brackets is treated literally.
  console.log(fruits[-1]);
}

// Arrays in JavaScript can work both queue and as a stack. They allow you to add/remove elements, both to/form the beginning or the end.
//
// In computer science, the data structure that allows this, is alled dequeu.

// Methods that work with the end of the array

// pop
// Extracts the last eelement of the array and returns it:
{
  let fruits = ["Apple", "Orange", "Pear"];
  console.log(fruits.pop());
  console.log(fruits);

  // Both fruits.pop() and fruits.at(-1) returns the last element of the array, but fruits.pop() also modifies the array by removing it.
}

// push
// Append the element to the end of the array
{
  let fruits = ["apple", "orange"];
  fruits.push("pear");
  console.log(fruits);

  // The call fruits.push(...) is equal to fruits[fruits.length] = ...
}

// Methods that work with the beginning of the array.

// shift
// Extract the first element of the array and returns it:
{
  let fruits = ["apple", "orange", "pear"];
  console.log(fruits.shift());
  console.log(fruits);
}

// unshift
// Add the element to the beginning of the array:
{
  let fruits = ["orange", "pear"];
  fruits.unshift("apple");
  console.log(fruits);
}

// Methods push and unshift can add multiple elements at once:
{
  let fruits = ["apple"];
  fruits.push("Orange", "Peach");
  fruits.unshift("Pineapple", "Lemon");
  console.log(fruits);
}

// Internals
//
// An array is a special kind of object. They extend boject providing special methods to work with ordered collections of data and also the length property. But at the core it's still an object.
//
// The engine tries to store its elements in the contiguous memory area, one after another.
//
// Bul they all break if we quit wokring with an array as with an "ordered collection" and start working with it as if it were a regular object.
{
  // how to misuse an array.
  // using array like a normal object will remove Array-specific optimizations and array benefits will disappear.
  let fruits = [];
  fruits[9999] = 5;
  fruits.age = 25;
  console.log(fruits.length);
  console.log(fruits);
}

// Performance
// Methods push/pop run fast, while shift/unshift are slow.
//
// shift/unshift are slow because when you remove and add an item to the front of an array. array indexes needs to be updated. the more elements in the array, the more time to move them, more in-memory operations.
//
// pop/push method does not need to move anything, because other elements keep their indexes.

// Loops
{
  let arr = ["apple", "orange", "pear"];
  // one of the oldest way to cycle array items is the for loop
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // another form of loop for arrays. for..of
  for (let val of arr) {
    console.log(val);
  }
  // The for..of doesn't give access to the number of the current element, just its value, but in most cases that's enough.

  // Technically, because arrays are objects, it is also possible to use for..in
  //
  // But that's actually a bad idea. There are potential problems with it:
  //
  // 1. The loop for..in iterates over all properties, not only the numeric ones. There are so-called "array-like" objects in the browser and in other environments, that look like arrays. That is, they have length and indexes property, but they may also have other non-numeric properties and methods, which we usually don't need. The for..in loop will list them though. So if we need to work with array-like objects, then these "extra" properties can become a problem.
  // 2. the for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it's still very fast. The speedup may only matter in bottlenecks. But till we should be aware of the difference.
  for (let key in arr) {
    console.log(arr[key]);
  }
}

// A word about "length"
// The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.
{
  let fruits = [];
  fruits[123] = "apple";
  console.log(fruits.length); // 124

  // Another interesting thing about the length property is that it's writable.
  // If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible,
  let arr = [1, 2, 3, 4, 5];
  arr.length = 2;
  console.log(arr);
  arr.length = 5;
  console.log(arr[3]);
}

// new Array()
//
// It's rarely used. There's a tricky feature with it.
// If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.
{
  let arr = new Array(2);
  console.log(arr[0]);
  console.log(arr.length);
}

// Multidimensional arrays
{
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 9, 9],
  ];
  console.log(matrix[0][1]);
}

// toString()
// Arrays have their own implementation of toString() method that return a comma-separated list of elements.
{
  let arr = [1, 2, 3];
  console.log(arr);
  console.log(String(arr) == "1,2,3");

  console.log([] + 1); // "1"
  console.log([1] + 1); // "11"
  console.log([1, 2] + 1); // "1,21"

  // Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2"
  //
  // When the binary plus "+" operator adds something to a string, it converts it to a string as well
  console.log("" + 1); // "1"
  console.log("1" + 1); // "11"
  console.log("1,2" + 1); // "1,21"
}

{
  let styles = ["jazz", "blues"];
  console.log(styles);
  styles.push("rock-n-roll");
  console.log(styles);
  styles[Math.floor(styles.length / 2)] = "classics";
  console.log(styles);
  styles.shift();
  console.log(styles);
  styles.unshift("rap", "regggae");
  console.log(styles);
}

{
  let arr = ["a", "b"];

  arr.push(function () {
    console.log(this);
  });

  arr[2]();
}

function sumInput() {
  let arr = [];

  while (true) {
    let input = prompt("Enter a number: ", "");
    if (!isFinite(input)) {
      break;
    }
    arr.push(+input);
  }

  const sum = arr.reduce((prev, current) => prev + current, 0);
  return sum;
}

{
  // run using bun since prompt not working with node
  // const result = sumInput();
  // console.log(result);
}

/**
 * @param {Array.<number>} values
 */
function getMaxSubSum(values) {
  let contiguous = [];

  for (let i = 0; i < values.length; i++) {
    for (let x = i + 1; x < values.length + 1; x++) {
      contiguous.push(values.slice(i, x).reduce((prev, current) => prev + current, 0));
    }
  }

  return Math.max(...contiguous);
}

// A maximal subarray
{
  console.log(getMaxSubSum([-1, 2, 3, -9]));
  console.log(getMaxSubSum([2, -1, 2, 3, -9]));
  console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
  console.log(getMaxSubSum([-2, -1, 1, 2]));
  console.log(getMaxSubSum([100, -9, 2, -3, 5]));
  console.log(getMaxSubSum([1, 2, 3]));
}
