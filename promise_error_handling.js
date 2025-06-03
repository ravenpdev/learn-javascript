// Promise error handling

// Implicit try...catch
// The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection.

// The "invisible try..catch" around the executor automatically catches the error and turns it into rejected promise.
// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");
//   // Works exactly the same as this:
//   // reject(new Error("Whoops!"))
// })
// .catch(console.log);

// This happens not only in the executor function, but in its handlers as well. If we throw inside a .then handler, that means a rejected promise, so the control jumps to the nearest error handler.
// new Promise((resolve, reject) => {
//   resolve("Ok");
// })
// .then((result) => {
//   throw new Error("Whoopsies!")
// })
// .catch(console.log);

// This happens for all errors, not just those caused by the throw statement. For example, a programming error:

// new Promise((resolve, reject) => {
//   resolve("ok")
// })
// .then((result) => {
//   blabla();
// })
// .catch(console.log);

// Rethrowing
console.log("RETHROWS");

// Here the .catch block finishes normally. So the next successful .then handler is called.
// new Promise((resolve, reject) => {
// 	throw new Error("Whoops!");
// })
// 	.catch(function (error) {
// 		console.log("The error is handled, continue normally");
// 	})
// 	.then(() => console.log("Next successful handler runs"));

new Promise((resolve, reject) => {
	throw new Error("Whoops!");
})
	.catch(function (error) {
		if (error instanceof URIError) {
			// hanlde it
		} else {
			console.log("Can't handle such error");

			throw error;
		}
	})
	.then(function () {
		/* doesn't run here */
	})
	.catch((err) => {
		console.log(`The unknown error has occured: ${err}`);
	});

// Unhandled rejections
// What happens when an error is not handled? For instance, we forgot to append .catch to the nd of the chain, like here:
{
	new Promise(function () {
		noSuchFunction();
	}).then(() => {});

	// In case of an error, the promise becomes rejected, and the execution should jump to the closest rejection handler. But there is none. So the error gets "stuck". There's no code to handle it.
	//
	// In practice, just like with regular unhandled errors in code, it means that something has gone terribly wrong.
	//
	// What happens when a regular error occurs and is not caught by try..catch? The script dies with a message in the console. A similar thing happens with unhandled promise rejections.
	//
	// The JavaScript enngine tracks such rejections and generates a global error in that case. You can see it in the console if you run the example above.
	//
	//
	// In the browser we can catch such errors using the vent unhandlerejection:
	window.addEventListener("unhandledrejection", function (event) {
		console.log(event.promise);
		console.log(event.reason);
	});

	new Promise(function () {
		throw new Error("Whoops!");
	});

	// The event is the part of the HTMl standard.
	//
	// If an error occurs, and there's no .catch, the unhandlerejection handler triggers, and gets the event object with the information about the error, so we can do something.
	//
	// Usually such errors are unrecoverable, so our best way is to inform the user about the problem and probably report the incident to the server.
}

new Promise(function (resolve, reject) {
	setTimeout(() => {
		throw new Error("whoops!");
	}, 1000);
}).catch(console.log);

// There's an "implicit try...catch"  around the function code. So all synchronous errors are handled.
//
// But here the error is generated not while the executor is running, but later. So the promise can't handle it.
