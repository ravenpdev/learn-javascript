let user = { name: "John" };
let admin = user;

console.log(user);
console.log(admin);
console.log(user == admin);
console.log(user === admin);

user = {};
console.log(user);
console.log(admin);
console.log(user == admin);
console.log(user === admin);

// Const object can be modified
//
// it must always reference the same object, but properties of that object are free to change.
  name: "John"
const john = {
};
john.name = "John Doe";
// john = {}; // TypeError: Assignment to constant variable.
console.log(john);


// Cloning and merging, Object.assign

let original = {
  name: "John",
  age: 30
};

let clone = {};
Object.assign(clone, original);
console.log(original == clone);
console.log(original === clone);



// Nested cloning
let obj1 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
// Now it's not enought to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:
let c1 = Object.assign({}, obj1);
console.log(c1);
console.log(obj1.sizes === c1.sizes);

// Deep cloning
c1 = structuredClone(obj1);
console.log(obj1.sizes === c1.sizes);


// structuredClone also supports circular references,
let obj2 = {};
obj2.me = obj2;
let c2 = structuredClone(obj2);
// As you can see, c2.me references the c2, not the obj2! So the circular references was cloned correctly.
console.log(c2.me === c2);
console.log(c2.me === obj2);


// Although, there are cases when structuredClone fails.
// For instance, when an object has a function property:

// error
structuredClone({
  f: function() {}
});
