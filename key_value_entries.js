// Object.keys, values, entries
//
// These methods are generic, there is a common argreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.
//
// They are supported for:
// - Map
// - Set
// - Array

// Plain objects also support similar methods, but the syntax is a bit different.
//
// Object.keys, values, entries
// Object.keys(obj) - returns an array of keys
// Object.values(obj) - returns an array of values.
// Object.entries(obj) - returns an array of [key, value] pairs.

const user = {
	name: "John",
	age: 30,
};

// Just like for..in loop, these methods ignore properties that use Symbol(...)
//
// Usually that's convenient. But if we want symbolic keys too, then there's a separate method Object.getOwnPropertySymbols that returns an array of only symbolic keys. Also, there exist a method Reflect.ownKeys(obj) that returns all keys.
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for (const value of Object.values(user)) {
	console.log(value);
}

// Transforming objects
//
// Object lack many methods that exists for arrays, e.g. map, filter and others.
//
// If we'd like to apply them, then we can use Object.entries followed by Object.fromEntries:
//
// 1. Use Object.entries(obj) to get an array of key/value pairs from obj.
// 2. Use array methods on that array, e.g. map, to transform these key/value pairs.
// 3. Use Object.fromEntries(array) on the resulting array to turn it back into an object.

const prices = {
	banana: 1,
	orange: 2,
	meat: 4,
};

const doublePrices = Object.fromEntries(
	Object.entries(prices).map((entry) => [entry[0], entry[1] * 2]),
);

console.log(doublePrices.meat);

for (const [key, value] of Object.entries(doublePrices)) {
	console.log(`key: ${key} -> value: ${value}`);
}

// Tasks
//
// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0

/**
 * @param {Record<string, number>} salaries
 */
function sumSalaries(salaries) {
	let result = 0;

	for (const val of Object.values(salaries)) {
		result += val;
	}

	return result;
}

function sumSalaries2(salaries) {
	return Object.values(salaries).reduce((acc, curr) => acc + curr, 0);
}

const salaries = {
	john: 100,
	pete: 300,
	mary: 250,
};

console.log(sumSalaries({}));
console.log(sumSalaries(salaries));
console.log(sumSalaries2({}));
console.log(sumSalaries2(salaries));

// Count properties
//
// Write a function count(obj) that returns the number of properties in the object:

/**
 * @param {Record<string, any>} obj
 * @returns number
 */
function count(obj) {
	return Object.keys(obj).length;
}

const users = {
	name: "John",
	age: 30,
};
console.log(count(users));
