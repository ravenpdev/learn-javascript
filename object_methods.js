'use strict';

let user = {
  name: "John",
  age: 30
};

// Function expression
// user.sayHi = function() {
//   console.log("Hello!");
// };


// These objects do the same
//
// To tell the truth, the notations are not fully identical. There are suble differences releated to object inheritance, but for now they do not matter. In almose all cases, the shorter syntax is preferred.
user = {
  sayHi: function() {
    console.log("Hello");
  }
};
user.sayHi();
// method shorthand looks better, right?
user = {
  sayHi() {
    console.log("Hello");
  }
}
user.sayHi();



// "this" in methods
user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(`Hello ${this.name}`);
  }
}
user.sayHi();



// "this" is not bound
// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it's not a method of an object.

function sayHi() {
  // The value of this is evaluated during the run-time, depending on the context.
  console.log(this.name);
}

let user1 = {name: "John"};
let admin1 = {name: "Admin"};

user1.f = sayHi;
admin1.f = sayHi;

user1.f(); // John (this == user1)
admin1.f(); // Admin (this == admin1)

// sayHi();




// Arrow functions have no "this"
//
// Arrow functions are special: they don't have their "own" this. If we reference this from such a function, it's taken from the outer "normal" function.
let user2 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
  ref: this
}
user2.sayHi();
// console.log(user2.ref.name); // TypeError: Cannot read property of undefined.


let calculator = {
  read() {
    this.a = +prompt("Enter first number: ", 0);
    this.b = +prompt("Enter second number: ", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());



// Chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();
