// Async/await
//
// The word "async" before a function means one simple thing: a function always returns a prommise. Other values are wrapped in a resolved promise automatically.
//
// So, async ensures that the function returns a promise, and wraps non-promises in it. Simple engouh, right? But not only that. There's another keyword, await, that works only inside async functions, and it's pretty cool.
async function f() {
	return 1;
}
f().then(console.log);

// Await
//
// The keyword await makes JavaScript wait until that promise settles and returns it result.

async function f2() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("done!"), 2000);
	});

	const result = await promise;
	console.log(result);
}

f2();

async function f3() {
	return await new Promise(() => 1);
}
