// Constructor, operator "new"
//
// When you need to create multiple objects
//
//
//
// Constructor function
// 1. They are name with capital letter first.
// 2. they should be exectued only with "new" operator.

function User(name) {
  // this = {}; (implicitly)
  this.name = name;
  this.isAdmin = false;

  // Methods in constructor
  this.sayHi = function() {
    console.log(`My name is: ${this.name}`);
  };

  // return this; (implicitly)
}

let user = new User("Jack");
console.log(user.name);
console.log(user.isAdmin);
user.sayHi();


// Two fucntions - one object
let obj = {}
function A() {
  return obj;
}
function B() {
  return obj;
}
console.log(new A() === new B());


function Calculator() {
  this.read = function() {
    this.a = +prompt("Enter first number: ", 0);
    this.b = +prompt("Enter second number: ", 0);
  }
  this.sum = function () {
    return this.a + this.b;
  }
  this.mul = function() {
    return this.a * this.b;
  }
}

const cal = new Calculator();
cal.read();
console.log(cal.sum());
console.log(cal.mul());


function Accumulator(startingValue) {
  this.value =startingValue;

  this.read = function() {
    this.value += +prompt("add new number: ");
  }
}

const acc = new Accumulator(5);
acc.read()
acc.read()
console.log(acc.value);
