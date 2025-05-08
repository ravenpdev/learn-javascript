// Promise
//
//
// The function passed to new Promise() is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually product the result. 
// 
//
// The promise object returned by the new Promise constructor has these intternal properties:
// state - initially "pending", then changes to either "fullfilled" when resolve is called or "rejected" when reject is called.
// result - initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

// let promise = new Promise(function(resolve, reject) {
//   // setTimeout(() => resolve("done"), 1000);

//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });


// There can be only a single result or an error
//
// The executor should call only one resolve or one reject. Any state change is final.
// All further calls of resolve and reject are ignored:


// promise.then(
//   (result) => console.log(result),
//   (error) => console.error(error)
// );

// If we'ere interested only in successful completions, then we can provide only one function argument to .then:

// promise.then(console.log);
// promise.catch(console.log);


// Pleae note that finally(f) isn't exactly an alias off then(f, f) though.
//
// There are important differences:
//
// 1. A finally handler has no arguments. In finally we don't know whether the promise is successful or not. That's all right, as our task is usually to perform "general" finalizing procedures.
//
// 2. A finally handler "passes through" the result or error to the next suitable handler.
// 3. A finally handler also shouldn't return anything. If it does, the returned value is silently ignored.
// The only exception to this rule is when a finally handler throws an error. Then this error goes to the next handler, instead of any previous outcome.
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
// .finally(() => console.log("Promise ready"))
// .then(result => console.log(result));

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done"), 1000);
// })
// .finally(() => {
//   throw new Error("Whoopsies!");
// })
// .catch(err => console.log(err));



function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = src;

    if (script) {
      resolve(script);
    } else {
      reject(new Error('Unable to load script'));
    }
  });
}

let p = loadScript("load.js");

p.then(
  script => console.log(script),
  error => console.log(error)
);

p.then(script => console.log(`again ${script}`));
p.catch(error => console.log(error));
