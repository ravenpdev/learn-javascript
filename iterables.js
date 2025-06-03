// Iterables
//
// Iterable objects are a generalization of arrays. That's a concept that allows us to make any object useable in a for..of loop.
//
// Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance strings are also iterable.
//
// If an object isn't technically an array, but represents a collection (list, set) of something, then for..of is a great syntax to loop over it.
//
//
// Symbol.iterator
// To make the range object iterable we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).
//
// 1. When for..of starts, it calls that method once (or errors if not found). the method must return an iterator - an object with the method next.
// 2. Onward, for..of works only with that returned object (iterator)
// 3. When for..of wants the next value, it call next() on that object (iterator)
// 4. The result of next() must have the form {done: Boolean, value:any}, where done=true means the loop is finished, otherwise value is the next value.
const range = {
	from: 1,
	to: 5,
};

range[Symbol.iterator] = function () {
	return {
		current: this.from,
		last: this.to,

		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			}
			return { done: true };
		},
	};
};

for (const num of range) {
	console.log(num);
}
// Please note the core feature of iterables: separation of concerns
//
// The range itself does not have the next() method.
// Instead, another object, a so-called "iterator" is created by the call to range[Symbol.iterator](), and its next() generate values for the iteration.

// String is iterable
// Arrays and strings are most widely used built-in iterables.
// For a string, for..of loops over its characters:
for (const char of "test") {
	console.log(char);
}
// And it works correctly with surrogate pairs!
let str = "🤣𝓧";
for (const char of str) {
	console.log(char);
}

// Calling an iterator explicitly
//
// That is rarely needed, but gives us more control over the process than for..of. For instance we can split the iteration process: iterate a bit, then stop, do something else, and them resume later.
str = "Hello";
const iterator = str[Symbol.iterator]();
while (true) {
	const result = iterator.next();
	if (result.done) break;
	console.log(result.value);
}

// Iterables and array-likes
// Two official terms look similar, but are very different.
//
// 1. Iterables are objects that implement the Symbol.iterator method
// 2. Array-likes are objects that have indexes and length, so they look like arrays.
//
// When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes, or both.
//
// strings are both iterable (for..of works on them) and array-like (9they have numeric indexes and length)
//
// But an iterable may not be array-like. And vice versa an array-like may not be iterable.
//
// The range in the example above is iterable, but not array-like, because it does not have indexed properties and length.

const arrayLike = {
	0: "Hello",
	1: "World",
	length: 2,
};

// Both iterables and array-likes are usually not arrays, they don't have push, pop etc.
// for (const item of arrayLike) {
// 	// Error (no Symbol.iterator)
// }

// Array.form
// There's a universal method Array.from that takes an iterable or array-like value and makes a "real" Array from it.
const arr1 = Array.from(arrayLike);
arr1.pop();
console.log(arr1);
// Array from at the line (*) takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it. The same happen for an iterable:
const arr2 = Array.from(range);
console.log(arr2);

// The full syntax for Array.from also allows us to provide an optional "mapping" function:
// Array.from(obj[, mapFn, thisArg])
//
// The optional second argument mapFn can be a function that will be applied to each element before adding it to the array, and thisArg allows us to set this for it.
const arr3 = Array.from(range, (num) => num * num);
console.log(arr3);

const text = "𝓧🤣";
const chars = Array.from(text);
console.log(chars[0]);
console.log(chars[1]);
console.log(chars.length);

// We can even build surrogate-aware slice on it:
function slice(str, start, end) {
	return Array.from(str).slice(start, end).join("");
}
const values = "𝓧🤣🐒";
console.log(slice(values, 1, 3));
// the native method does not support surrogate pairs
