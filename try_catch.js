// Error handling, "try...catch"

// try {
//   console.log('start of try runs');

//   lala;

//   console.log('end of try runs');
// } catch (err) {
//   console.log('Error has occured!');
// }


// try...catch works synchronously
// If an exception happens in "schedule" code, like in setTimeout, then try...catch won't catch it:
//
// That's because the function itself is executed later, when the engine has already left the try...catch construct.

// try {
//   setTimeout(function () {
//     noSuchVariable;
//   }, 1000);
// } catch (err) {
//   console.log("Won't work");
// }

// setTimeout(() => {
//   try {
//     noSuchVariable;
//   } catch {
//     console.log('error is caught here!');
//   }
// }, 1000);



// Error object
//
// When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:
try {
  //
} catch (err) { // <-- the "error object", could use anothter word instead of err
  //..
}

// For all built-in errors, the error object has two main properties:
// name - error name. for instance, for an undefined variable that's "ReferenceError".
// message - textual message about error details.
// stach - current call stack: a string with information about the sequence of nested calls that led to the error. used for debugging purposes.
try {
  lalala;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);

  // console.log(err);
}


// Optional "catch" binding
// If we don't need error details, catch may omit it:
try {
  // TODO: 
} catch {
  // TODO:
}

try {
  let user = {
    name: "john",
    age: 30
  }

  user = JSON.parse(JSON.stringify(user));
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("Our apologies, the data has errors, we'll try to request it one more time.");
  console.log(err.name);
  console.log(err.message);
}


try {
  let json = '"name": "John", "age": 30}';
  let user = JSON.parse(json);
  console.log(user.name);
  console.log(user.age);
} catch (err) {
  console.log("Our apologies, the data has errors, we'll try to request it one more time.");
  console.log(err.name);
  console.log(err.message);
}


// Throwing our own errors
//
// What if json is syntactically correct, but doesn't have a required name property?
{
  let json = '{"age": 30}';
  try {
    let user = JSON.parse(json);
    console.log(user.name); // returns undefined, but this is actually an error for us.
  } catch (err) {
    console.log("doesn't execute");
  }
}


// "Throw" operator
//
// The throw operator generates an error.
// Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it's better to use objects, prefereably with name and mesasge properties (to stay somewhat compatible with built-in errors).
//
// JavaScript built-in constructor for standard errors: Error, SyntaxError, ReferenceError, TypeError
//
// For built-in errors, the name property is exactly the name of the constructor. And message is taken from the argument.
let error = new Error('Things happen o_O');
console.log(error.name);
console.log(error.message);

try {
  JSON.parse("{bd json o_O}");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}


try {
  let json = '{"age": 30}';

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name")
  }

  console.log(user.name)
} catch (err) {
  console.log(`JSON Error: ${err.message}`);
}


// Rethrowing
//
// Catch should only process errors that it knows and "rethrow" all others.
//
// The "rethrowing" technique can be explained in more details as:
//
// 1. Catch gets all errors.
// 2. In the catch (err) {...} block we analyze the error object err.
// 3. If we don't know how to handle it, we do throw err.

// try {
//   let json = '{"age": 30, "name": "doe"}';

//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }

//   blabla();
//   console.log(user.name);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log("JSON Error: " + err.message);
//   } else {
//     console.log("errors:", err.name, err.constructor.name);
//     throw err;
//   }
// }


function readData() {
  let json = '{"age": 30}';

  try {
    blabla();
  } catch (err) {
    console.log(err.name);
    if (!(err instanceof SyntaxError)) {
      throw err;
    }
  }
}

try {
  readData();
} catch (err) {
  console.log(`External catch got: ${err}`);
}



// try...catch...finally
try {
  console.log('try');
  blalbla();
} catch (err) {
  console.log(err.constructor.name);
} finally  {
  console.log('finally');
}

let timerId;

try {
  timerId = setTimeout(() => {
    console.log('display after 5 seconds');
  }, 5000);
} catch (err) {
  console.log(err.constructor.name);
} finally {
  // timerId = clearInterval(timerId);
  console.log(`timer is cleared!`);
}


setTimeout(() => {
  console.log('waiting....');
}, 10_000);

let startDate = Date.now();
try {
  console.log('doing somethinng');
} catch (err) {
  console.log(err.constructor.name);
} finally {
  setTimeout(() => {
    console.log(Date.now() - startDate);
  }, 5000);
  // console.log(new Date() - startDate);
}

// the finally is executed just before the control return to the outer code.
function demo() {
  try {
    return 1;
  } catch (err) {
    console.log(err.name);
  } finally {
    console.log('finally');
  }
}
console.log(demo());




// Global catch

// Node
// process.on("uncaughtException")
import process from 'node:process';
process.on('uncaughtException', (err, origin) => {
  console.log('i was her!');
  console.log('name:', err.name);
  console.log('origin:', origin);
});
notexistentFunction();

// Browser
// window.onerror
// window.onerror = function(event, source, lineNumber, colNumber, error) {
//   // TODO
// }

// The role of the global handler window.onerror is usually not to recover the script execution, but to send the error message to developers



setInterval()
