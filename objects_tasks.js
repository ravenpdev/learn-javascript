// Hello, Object
//
// Write the code, one line for each action:
// 
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// Check for emptiness
//
// Write the function isEmpty(obj) which return true if the object has no properties, false otherwise

function isEmpty(object = {}) {
  for (let key in object) {
    return false;
  }

  return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));


// Sum object properties
//
// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sumSalaries = (object) => {
  let sum = 0;

  for (let key in object) {
    sum += object[key];
  }

  return sum;
}
let sum = sumSalaries(salaries);
console.log(sum);
sum =sumSalaries({});
console.log(sum);


// Multiply numeric property values by 2
// 
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2
    }
  }
}

let menu = {
  width: 200,
  heigth: 300,
  title: "My menu"  
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
