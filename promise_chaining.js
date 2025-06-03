// Promise chaining


// The whole thing works, because every call to a .then return a new promise, so that we can call the next .then on it.
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}).then(result => {
  console.log(result);
  return result * 2;
}).then(result => {
  console.log(result);
  return result * 2;
}).then(result => {
  console.log(result);
  return result * 2;
})


// A lassic newbie error: technically we can also add many .then to a single promise. This is not chaining.

// What we did hre is just adding several handlers to one promise. They don't pass the result to ech other; instead they process it independently.
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

p1.then((result) => {
  console.log(result); // 1
  return result * 2;
});

p1.then((result) => {
  console.log(result); // 1
  return result * 2;
});

p1.then((result) => {
  console.log(result); // 1
  return result * 2;
});


// Returning a promises
//
// A handler, used in .then(handler) may create and return a promise.
// In that case further handlers wait until it settles, and then get its result.

new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}).then(result => {
  console.log(result);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(result => {
  console.log(result);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(result => {
  console.log(result);
});


// Thenables
//
// To be precise, a handler may return not exactly a promise, but a so-called "thenable" object - an arbitray object that has a method .then. It will be treated the same way as a promise.

class Thenable {
  constructor(num) {
    this.num = null;
    skdjfksdj
  }

  then(resolve, reject) {
    console.log(resolve);

    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result);
  })
  .then(console.log);


new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Woopsies!")), 1000);
})
  .catch((err) => {
    return new Promise((resolve, reject) => {
      console.log(err)
      resolve("nice!")
    });
  })
  .then(msg => console.log(msg));

