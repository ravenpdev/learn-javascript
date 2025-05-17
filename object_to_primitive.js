"use strict";
// For an object-to-string conversion, when we're doing an operation on an object that expects a string, like alert:
const obj = {};

// using object as a property key
const anotherObj = {};
anotherObj[obj] = 123;
console.log(anotherObj);

// For an object-to-number conversion, like when we're doing maths:
let num = Number(obj);
console.log(num);

// maths (except binary plus)
let n = +obj; // unary plus
console.log(`n: ${n}`);
const date1 = Date.now();
const date2 = Date.now();
let delta = date1 - date2;
console.log(`detla: ${delta}`);

// less/greater comparison
// let greater = user1 > user2;

// default conversion of object occurs in rare cases, when the operator is "not sure" what type to expect.
//
// for instance, binary plus + can work both with strings. So if a binary plus gets an object as an argument, it uses the "default" hint to convert it.
//
// Also, if an object is compared using == with a string, number or a symbol, it's also unclear which conversion should be done, so the "default" hint is used.
//
// binary plus users the "default" hint
// let total = obj1 + obj2;
// obj == number uses the "default" hint
// if (use == 1) {...}

// To do the conversion, JavaScript tries to find and call three object methods:
// 1. Call obj[Symbol.toPrimitive](hinnt) - the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists.
// 2. Otherwise if hint is "string" try calling obj.toString() or obj.valueOf(), whatever exists.
// 3. Otherwise if hint is "number" or "default" try calling obj.valueOf() or obj.toStrinng(), whatever exists.

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

// toString/valueOF
// If there's no Symbol.toPrimitive then JavaScript tries to find methods toString() and valueOf:
//
// - For the "string" hint: call toString method, and if it doesn't exist or if it returns an object instead of a primitive value, then call valueOf.
// - For other hints: call valueOf, and if it doesn't exist or if it returns an object instead of a primitive value, then call toString (so valueOf has the priority for maths).
//
// These methods must return a primitive value. If toString or valueOf returns an object, then it's ignored
//
// By default, a plain object has following toString and valueOf methods:
// - The toString method returns a string "[object Object]".
// - the valueOf method returns the object itself.
{
  let user = { name: "John" };
  console.log(user);
  console.log(user.toString());
  console.log(user.valueOf() === user);
  console.log(Object.prototype.toString.call(user));
}

{
  // This is the same with [Symbol.toPrimitive](hint)
  let user = {
    name: "John",
    money: 1000,

    toString() {
      return `{name: "${this.name}"}`;
    },

    valueOf() {
      return this.money;
    },
  };

  console.log(user.toString());
  console.log(+user); // valueOf 1000
  console.log(user + 500); // valueOf 1500
}

{
  // Single "catch-all" palce to handle all primitive conversions
  let user = {
    name: "John",

    toString() {
      return this.name;
    },
  };

  console.log(user.toString()); // John
  console.log(user + 500); // toString -> John500
}

// A conversion can return any primitive type
//
// The only mandatory thing: these methods must return a primitive, not an object. If not they are ignored
//
// In contrast, Symbol.toPrimitive is stricter, it must return a primitive, otherwise there will be an error.

{
  let obj = {};
  console.log(obj + 2); // convert to primitive, then + will concat them since obj primitive is "2"

  obj = {
    toString() {
      return "2";
    },
  };

  console.log(obj * 2); // obj converted to primitive "2", then multiplication convert it to number
}
