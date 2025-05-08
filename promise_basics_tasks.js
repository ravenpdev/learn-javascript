// Re-resolve a promise?
//
// What's the output of the code below?
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  // this will get ignore since the promise is already resolve above
  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log); // 1



// Delay with a promise
// The built-in function setTimout uses callbacks. Create a promise-based alternative.
//
// The function delay(ms) should return a promise. That promise should resolved after ms milliseconds, so that we can add .then to it.

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
delay(3000).then(() => console.log('runs after 3 seconds'));



function showCircle(x, y, radius) {
  return new Promise((resolve, reject) => {
    let div = 'div';
    resolve(div);
  });
}

showCircle(150, 150, 100).then(div => {
  console.log(div);
});
