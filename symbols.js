// Symbols
//
// A "symbol" represents a unique identifier
//

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);
console.log(id1 === id2);

// Symbols don't auto-convert to a string
console.log(id1);
console.log(id1.toString());
console.log(id1.description);

// "Hidden" properties
// Symbols allow us to create "hidden" properties of an object, that no other part of code can accidentally access or overwrite.
// Symbols are always different even if they have the same name.
let user = {
  name: "John",
};
let id = Symbol("id");
user[id] = 1;
console.log(user[id]);

// Symbols in an object literal
// If we wantt to use a symbol in an object literal {...}, we need square brackets around it.
{
  let id = Symbol("id");
  let user = {
    name: "John",
    age: 30,
    [id]: 123, // not "id": 123
  };

  // Symbols are skipped by for...in
  for (let key in user) console.log(key);
  // Object.keys(user) also ingores them.
  console.log(Object.keys(user));

  // In contrast, Object.assign copies both string and symbol properties:
  let clone = Object.assign({}, user);
  console.log(clone);
}

// Global symbols
{
  // read from the global registry
  let id = Symbol.for("id");
  // read it again (maybe from another part of the code)
  let idAgain = Symbol.for("id");
  console.log(id === idAgain);
}

// Symbol.keyFor
{
  let sym = Symbol.for("name");
  let sym2 = Symbol.for("id");

  // get name by sumbol
  console.log(Symbol.keyFor(sym)); // name
  console.log(Symbol.keyFor(sym2)); // id
}
