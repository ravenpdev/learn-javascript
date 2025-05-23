// Map
//
// Map is a collection of keyed data items, just like an Object. but the main difference is that Map allows keys of any type.
//
// Methods and properties are:
//
// - new Map() - creates the map
// - map.set(key, value) -> stores the value by the key.
// - map.get(key) - returns the value by the key, undefined if key doesn't exist in map.
// - map.has(key) - returns true if the key exists, false otherwise.
// - map.delete(key) - removes the element (the key/value pair) by the key.
// - map.clear() - removes everything from the map.
// - map.size - returns the current element count.

const map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'
console.log(map.size); // 3

// Map can also use objects as keys.
const john = { name: "John" };
const visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));
console.log(visitsCountMap);
// Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can't use another Object as a key in Object.
const ben = { name: "ben" };
const visitsCountObj = {};
visitsCountObj[ben] = 234;
visitsCountObj[john] = 123;
console.log(visitsCountObj);
// A visitsCountObj is an obbject, it converts all Object keys, such as john and ben above, to same string "[object Obbject]".

// How Map compares keys
// To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

// Chaining
// Every map.set call returns the map itself, so we can "chain" the calls:
map.set("1", "str1").set(1, "num2").set(true, "bool1");
console.log(map);

// Iteration over Map
//
// map.keys() - returns an iterable for keys
// map.values() - returns an iterable for values
// map.entries() - returns an iterable for entries [key, value], it's used by default in for..of
const recipeMap = new Map([
	["cucumber", 500],
	["tomatoes", 350],
	["onion", 50],
]);

for (const vegetable of recipeMap.keys()) {
	console.log(vegetable);
}

for (const amount of recipeMap.values()) {
	console.log(amount);
}

for (const entry of recipeMap) {
	console.log(entry);
}

// The insertion order is used
// The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

recipeMap.forEach((value, key, map) => {
	console.log(`${key}: ${value}`);
});

// Object.entries: Map from Object
const m1 = new Map([
	["1", "str1"],
	[1, "num1"],
	[true, "bool"],
]);
console.log(m1.get("1")); // str1
// If we have a plain object, and we'd like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
const obj1 = {
	name: "John",
	age: 30,
};
const m2 = new Map(Object.entries(obj1));
console.log(m2.get("name"));
// Here, Object.entries returns the array of key/value pairs: [["name", "John", ["age", 30]]]. That's what Map needs.

// Object.fromEntries: Object from Map
// There's Object.fromEntries method that does the revers: given an array of [key, value] pairs. it creates an object from them:
const prices = Object.fromEntries([
	["banana", 1],
	["orange", 2],
	["meat", 4],
]);
console.log(prices.orange);
console.log(prices);
// E.g we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.
const m3 = new Map();
m3.set("banana", 1);
m3.set("orange", 2);
m3.set("meat", 4);
const o1 = Object.fromEntries(m3.entries());
const o2 = Object.fromEntries(m3); // That's the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pair as map.entries().So we get a plain object with the same key/values as the map.
console.log(m3.entries());
// A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.

// Set
// A Set is a special type collection - "set of values" (without keys), where each value may occur only once.
//
// Its main methods are:
// - new Set([iterable]) - creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// - set.add(value) - adds a value, returns the set itself
// - set.delete(value) - removes the value, return true if value exsted at the momemnt of the call otherwise false.
// - set.has(value) - returns true if the value exists in the set, otherwise false.
// - set.clear() - removes everything from the set.
// - set.size - is the elements count.

const set = new Set();
const johny = { name: "John" };
const pete = { name: "pete" };
const mary = { name: "mary" };

set.add(johny);
set.add(pete);
set.add(mary);
set.add(johny);
set.add(mary);
console.log(`set size: ${set.size}`);

// Iteration over Set
for (const value of set) console.log(value);
set.forEach((value, valueAgain, set) => {
	console.log(value);
});
// The callback function passed in forEach has 3 arguments: a value, then the same value valugeAgain, and then the target object. Indeed, the same value appears in the arguemtns twice. That's for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange for sure. But this may help to replace Map with Set in certain cases with ease, and vice versa.
//
// The same methods Map has for iterators are also supported:
// - set.keys() - returns an iterable object for values,
// - set.values() - same as set.keys(), for compatibility with Map,
// - set.entries() - returns an iterable object for entries [value, value], exists for compatibility with Map.

// Tasks
//
// Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
	return new Set(arr);
}

const values = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

// Filter anagrams
// Anagrams are words that have the same number of same letters, but in different order.

/**
 * @param {Array.<string>} arr
 */
function aclean(arr) {
	const map = new Map();

	for (const value of arr) {
		const sorted = Array.from(value.toLocaleLowerCase()).sort().join("");
		map.set(sorted, value);
	}

	return Array.from(map.values());
}

{
	const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

	console.log(aclean(arr));
}
