// Promise Api
// There are 6 static methods in the Promise class.

// Promise.all
// Let's say we want many promises to execute in parallel and wait until all of them are ready.
//
// Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
// Promise.all([
// 	new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
// 	new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
// 	new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
// ]).then(console.log); // [1, 2, 3]
// Please not that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it's still first in the array of results.
//
// A common trick is to map an array of job data into an array of promises, and then wrap that into Promise.all

// const urls = [
// 	"https://api.github.com/users/iliakan",
// 	"https://api.github.com/users/remy",
// 	"https://api.github.com/users/jeresig",
// ];
// const requests = urls.map((url) => fetch(url));
// // console.log(requests);
// Promise.all(requests).then((responses) =>
// 	responses.forEach((response) =>
// 		console.log(`${response.url}: ${response.status}`),
// 	),
// );

// If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
//
// Here the second promise rejets in two seconds. That leads to an immediate rejection of Promise.all, so .catch executes: the rejection error becomes the outcome of the entire Promise.all
// Promise.all([
// 	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
// 	new Promise((resolve, reject) =>
// 		setTimeout(() => reject(new Error("Whoops")), 2000),
// 	),
// 	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(console.log);

// WARN:
// If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.
//
// For example, if there are multiple fetch calls, like in the example above, and one fails, the others will still continue to execute, but Promise.all won't watch them anymore. They will probably settle, but their results will be ignored.
//
// Promise.all does nothing to cancel them, as there's no concept of "cancellation" in promises.

// Promise.all(iterable) allows non-promise "regular" values in iterable Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it's passed to the resulting array "as is".
// Promise.all([
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => resolve(1), 1000);
// 	}),
// 	2,
// 	3,
// ]).then(console.log);

// Promise.allSettled
//
// Promise.all rejects as a whole if any promise rejects. That's good for "all or nothing" cases, when we need all results successful to proceed:

// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:
// { status: "fullfilled", value: result } for successful responses,
// { status: "rejected", reasonn: error } for errors
//
// For example, we'd like to fetch the information about multiple users. Even if one request fails, we're still interested in the others.

// {
// 	const urls = [
// 		"https://api.github.com/users/iliakan",
// 		"https://api.github.com/users/remy",
// 		"https://no-such-url",
// 	];

// 	Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
// 		results.forEach((result, num) => {
// 			if (result.status === "fulfilled") {
// 				console.log(`${urls[num]}: ${result.value.status}`);
// 			}
// 			if (result.status === "rejected") {
// 				console.log(`${urls[num]}: ${result.reason}`);
// 			}
// 		});
// 	});
// }

// Promise.race
// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
//
// The first promise here was fastest, so it became the result. After the first settled promise "wins the race", all further results/errors are ignored.
Promise.race([
	// new Promise((resolve, jreject) => setTimeout(() => resolve(1), 1000)),
	new Promise((resolve, reject) => setTimeout(reject, 1000, "Error")),
	new Promise((resolve, reject) =>
		setTimeout(() => reject(new Error("Whoops")), 2000),
	),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
	.then(console.log)
	.catch(console.error);

// Promise.any
//
// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all the given promises are rejected, then the returned promise is rejected with AggregateError - a special error object that stores all promise errors in its errors property.

Promise.any([
	new Promise((resolve, reject) =>
		setTimeout(() => reject(new Error("Whoopsie")), 1000),
	),
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(2), 3000)),
]).then(console.log);
