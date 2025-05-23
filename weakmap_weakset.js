// Weakmap
//
// The difference between Map and WeakMap is that keys must be objectsm not primivites values:

const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "ok");
// weakMap.set("test", "whoops!"); // Error because test is not an object

// Now if we use an object as the key in it, and there are no other references to that object - it will be removed from memory automatically.
let john = { name: "John" };
weakMap.set(john, "...");
john = null;

// WeakMap does not support iteration and methods keys(), values(), entries() so there's no way to get all the keys or values from it.
//
// WeakMap has only the following methods:
// 1. weakMap.set(key, value)
// 2. weakMap.get(key)
// 3. weakMap.delete(key)
// 4. weakMap.has(key)
//
// Use case: additional Data
// Use case: caching

// When no more other reference to the object it will garbage collected.
const cache = new WeakMap();
function process(obj) {
	if (!cache.has(obj)) {
		const result = "cache value here";
		cache.set(obj, result);

		return result;
	}

	return cache.get(obj);
}

// WeakSet
// WeakSet behaves similarly:
//
// 1. It is analogous to Set, but we may only add objects to WeakSet (not primitives)
// 2. An object exists in the set while it is reachable from somewhere else.
// 3. Like Set, it supports add, has and delete, but not size, keys() and no iterations.
//
// Being "weak", it also serves as additional storage. But not for arbitrary data, rather for "yes/no" facts. A membership in WeakSet may mean something about the object.

const visitedSet = new WeakSet();

let jon = { name: "jon" };
const pete = { name: "Pete" };
const mary = { name: "Mary" };

visitedSet.add(jon);
visitedSet.add(pete);
visitedSet.add(jon);

console.log(visitedSet.has(jon));
console.log(visitedSet.has(mary));
jon = null; // will be garbage collection

// The most notable limitation of WeakMap and WeakSet is the absence of iterations, and the inability to get all current content. That may appear incovenient, but does not prevent WeakMap/WeakSet from doing their main job - be an "additional" storage of data for objects which are stored/managed at another place.
