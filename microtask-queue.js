// Microtasks
//
// Promise handlers .then/.catch/.finally are always asynchronous.
// Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers.
{
	const promise = Promise.resolve();
	promise.then(() => console.log("promise done!"));
	console.log("code finished");
}

// Microtasks queue
//
// Asynchronous tasks need proper management. For that, the ECMA standard specifies an interal queue PromiseJobs, more often referred to as the "microtask queue" (v8 term).
//
// As stated in the specification:
// - The queue is first-in-first-out: tasks enqueued first are run first.
// - Execution of a task is initiated only when nothing else is running.
//
// Or, to put it more simply, when a promise is ready, its .thenn/catch/finally handlers are put into the queue; they are not executed yet. When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.
