// Array methods

// splice
// How to delete an element from the array?
// The arrays are objects, so we can try to use delete
{
  let arr = ["I", "go", "home"];
  delete arr[1];
  console.log(arr[1]);
  console.log(arr.length);

  // The element was removed, but the array still has 3 elements.
  // That's natural, because delete obj.key removes a value by the key. It's all it does. Fine for objects. But for arrays we want the rest of the element to shift and occupy the freed palce.
  //
  //
  // Special methods should be used.
  // The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
  //
  // arr.splice(start[, deleteCount, eleme1, ..., elemN])
  //
  // It modifies arr starting from the index start :removes deleteCount elements and then insert elem1, ..., elemN at their place. Returns the array of removed elements.

  {
    // Deletion
    let arr = ["I", "study", "JavaScript"];
    arr.splice(1, 1);
    console.log(arr);
  }
  {
    // Remove elements and replace them with the other values:
    let arr = ["I", "study", "JavaScript", "right", "now"];
    arr.splice(0, 3, "Let's", "dance");
    console.log(arr);
  }
  {
    // splice returns the array of removed elements:
    let arr = ["I", "study", "JavaScript", "right", "now"];
    let removed = arr.splice(0, 2);
    console.log(removed);
  }
  {
    // splice method is also able to insert the elements without any removals.
    let arr = ["I", "study", "JavaScript"];
    arr.splice(2, 0, "complex", "language");
    console.log(arr);

    // Negative indexes allowed
    let nums = [1, 2, 5];
    nums.splice(-1, 0, 3, 4);
    console.log(nums);
  }
}

// slice
// The method arr.slice is much simpler than arr.splice.
// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
{
  let arr = ["t", "e", "s", "t"];
  console.log(arr.slice(1, 3));
  console.log(arr.slice(-2));
}

// concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.
// It accepts any number of arguments - either arrays or values.
// The result is a new array containing items from arr, then arg1, arg2 etc.
// If an argument is an array, then all its elements are copied. Otherwise, the argument itself is copied.
{
  let arr = [1, 2];
  console.log(arr.concat([3, 4])); // 1, 2, 3, 4
  console.log(arr.concat([3, 4], [5, 6])); // 1, 2, 3, 4, 5, 6
  console.log(arr.concat([3, 4], 5, 6)); // 1, 2, 3, 4, 5, 6

  // Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole.

  let arr2 = [1, 2];
  let arrayLike = {
    0: "something",
    length: 1,
  };
  console.log(arr2.concat(arrayLike));

  // But if an array-like object has a special Symbol.isConcatSpreadable property, then it's treated as an array by concat: its elements are added instead:
  let arr3 = [1, 2];
  let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  };
  console.log(arr3.concat(arrayLike2));
}

// Iterate: forEach
// The arr.forEach method allows to run a function for every element of the array.
{
  ["bilbo", "gandalf", "nazgul"].forEach(console.log);
  ["bilbo", "gandalf", "nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });
}

// Searching in array
// indexOf/lastIndexOf and includes
//
// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items inteads of characters:
//
// 1. arr.indexOf(item, from) - looks for item starting from index from, and return the index where it was found, otherwise -1.
// 2. arr.includes(item, from) - looks for item starting from index from, returns true if found.
//
// Usually, these methods are used with only one argument: the item to search. By default, the search is from the beginning.
{
  let arr = [1, 0, false];
  console.log(arr.indexOf(0)); // 1
  console.log(arr.indexOf(false)); // 2
  console.log(arr.indexOf(null)); // -1
  console.log(arr.includes(1));

  // Note that indexOf uses strict equality === for comparison, So, if we look for false, it finds exactly false and not the zero.
  //
  // If we want to check if item exists in the array and don't need the index, then arr.includes is preferred.
  //
  // The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.
  let fruits = ["Apple", "Orange", "Apple"];
  console.log(fruits.indexOf("Apple"));
  console.log(fruits.lastIndexOf("Apple"));

  // The includes method handles NaN correctly
  const data = [NaN, false];
  console.log(data.indexOf(NaN));
  console.log(data.includes(NaN));
  console.log(data.indexOf(false));
  console.log(data.includes(false));
}

// find and findIndex/findLastIndex
// Imagine we have an array of objects. How do we find an object with a specific condition?
// If it return true, the search is stopped, the item is returned. If nothing is found, undefined is returned.
{
  let arr = [
    {
      id: 1,
      username: "raven",
      age: 33,
    },
    {
      id: 2,
      username: "kristine",
      age: 33,
    },
    {
      id: 3,
      username: "kristine",
      age: 33,
    },
  ];

  let result = arr.find((p) => p.id === 2);
  console.log(result);

  // The arr.findIndex method has the same syntax but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.
  // The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf
  console.log(arr.findIndex((user) => user.username === "raven")); // 0
  console.log(arr.findIndex((user) => user.username === "iya")); // -1
  console.log(arr.findLastIndex((user) => user.username === "kristine")); // 2
}

// filter
// The find method looks for a single (first) element that makes the function return true.
// If there may be many, we can use arr.filter(fn)
{
  let arr = [
    {
      id: 1,
      username: "raven",
      age: 33,
    },
    {
      id: 2,
      username: "kristine",
      age: 33,
    },
    {
      id: 3,
      username: "kristine",
      age: 33,
    },
  ];

  console.log(arr.filter((user) => user.username === "kristine"));
}

// Transform an array

// map
// The arr.map method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of result.
{
  let arr = [
    {
      id: 1,
      username: "raven",
      age: 33,
    },
    {
      id: 2,
      username: "kristine",
      age: 33,
    },
    {
      id: 3,
      username: "kristine",
      age: 33,
    },
  ];

  console.log(arr.map((user) => user.username));
  console.log(
    arr.map((user) => ({
      ...user,
      username: user.username.at(0).toLocaleUpperCase() + user.username.substring(1),
    })),
  );
}

// sort(fn)
// The call to arr.sort() sorts the array in place, chaning its element order.
// It also returns the sorted array, but the returned value is usally ignored, as arr itself is modified.
{
  let arr = [1, 2, 15, 0, 8];
  console.log(arr.sort()); // 1, 15, 2
  // The items are sorted as string by default.

  console.log(
    arr.sort((a, b) => {
      // if (a > b) return 1;
      // if (a == b) return 0;
      // if (a < b) return -1;
      console.log(`${a} <> ${b}`);

      return a > b ? 1 : a == b ? 0 : -1;
    }),
  );
}

// A comparison function may return any number
//
// Actually, a comparison function is only required to return a positive number to say "greater" and a negative number to say "less".
{
  let arr = [1, 2, 15];

  arr.sort(function (a, b) {
    return b - a;
  });

  console.log(arr); // 1, 2, 15
}

// Use localeCompare for string
// Remember stringns comparison algorithms? It compares letter by their codes by default.
{
  let countries = ["Österreich", "Andorra", "Vietnam"];
  console.log(countries.sort((a, b) => (a > b ? 1 : -1)));
  console.log(countries.sort((a, b) => a.localeCompare(b)));
}

// revers
// The method arr.reverse reverses the order of elements in arr
{
  let arr = [1, 2, 3, 4, 5];
  arr.reverse();
  console.log(arr);

  // try to create my reverse method
  const reverse = (numbers) => {
    let low = 0;
    let high = numbers.length - 1;

    while (low < high) {
      let tmp = numbers[high];
      numbers[high] = numbers[low];
      numbers[low] = tmp;
      low++;
      high--;
    }
    console.log(numbers);
  };

  reverse([1, 2, 3, 4, 5]);
}

// split and join
{
  let names = "Bilbo, Gandalf, Nazgul";
  let arr = names.split(" ");
  for (let name of arr) {
    console.log(`A message to ${name}`);
  }

  let data = ["Bilbo", "Gandalf", "Nazgul"];
  let str = data.join(";");
  console.log(str);
}

// reduce/reduceRight
{
  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);
  console.log(result);

  const employees = [
    {
      id: 1,
      salary: 300,
    },
    {
      id: 2,
      salary: 400,
    },
    {
      id: 3,
      salary: 500,
    },
  ];
  result = employees.reduce((sum, user) => sum + user.salary, 0);
  console.log(`Total employees salary: ${result}`);

  // We also can omit the initial value:
  // The result is the same. That's because if there's no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.
  // But such use require an extreme care. If the array is empty, then reduce call without initial value gives an error
  // arr = [];
  // arr.reduce((sum, current) => sum + current);
}

// Array.isArray
// Arrays do not form a separate language type. They are based on objects.
// So typeof does not help to distinguish a plain object from an array:
{
  console.log(typeof {}); // object
  console.log(typeof []); // object
  console.log(Array.isArray({})); // false
  console.log(Array.isArray([])); // true
}

// Most methods support "thisArgs"
// Almost all array<F7> methods that call functions - like find, filter, map, with a notable exception of sort, accept an optional additional paramater thisArrg.
//
// The value of thisArg parameter becomes this for func.
{
  let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    },
  };

  let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

  let soldiers = users.filter(army.canJoin, army);
  // let soldiers = users.filter(army.canJoin(user)); same as the above.
  console.log(soldiers);
}

// More array methods
//
// arr.some(fn) - if fn return a truthy value, arr.some() immediately return true and stop iterating over the rest of items;
// arr.every(fn) - if fn returns a falsy value, arr.every() immediately returns false and stop iteratting over the rest of items as well.
// arr.fill - change all elements within a range of indices in an array to a static value. it returns the modified array
{
  let persons = [
    {
      name: "raven",
      age: 33,
    },
    {
      name: "kristine",
      age: 33,
    },
    {
      name: "iya",
      age: 10,
    },
    {
      name: "elia",
      age: 3,
    },
  ];
  console.log(persons.some((p) => p.age > 29));
  console.log(persons.every((p) => p.age > 25));

  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  nums = nums.fill(0, 0, 5);
  console.log(nums);
}

/**
 * Tried to implement quick sort just the basic
 * the partitioning part is naive. I use recursion, IMO its more readable.
 *
 * @param {Array.<number>} data
 */
// function quickSort(data) {
//   if (data.length <= 1) return data;
//
//   const pivotIndex = Math.floor(data.length / 2);
//
//   let left = [];
//   let right = [];
//   for (let i = 0; i < data.length; i++) {
//     if (i === pivotIndex) continue;
//     if (data[i] < data[pivotIndex]) {
//       left.push(data[i]);
//     } else {
//       right.push(data[i]);
//     }
//   }
//
//   return [...quickSort(left), data[pivotIndex], ...quickSort(right)];
// }
// console.log(quickSort([4, 3, 1, 2, 5, 9, 7, 10, 6]));

// Tasks
//
// Translate border-left-width to borderLeftWidth
/**
 * @param {string} text
 * @return {string}
 */
function camelize(text) {
  return text
    .split("-")
    .map((w, index) => {
      if (index === 0) return w;

      return w.at(0).toLocaleUpperCase() + w.slice(1);
    })
    .join("");
}

{
  console.log(camelize("background-color"));
  console.log(camelize("background-color") == "backgroundColor");
  console.log(camelize("list-style-image") == "listStyleImage");
  console.log(camelize("-webkit-transition") == "WebkitTransition");
}

// Filter range
// Write a function filterRange(arr, a, b) tthat gets an array arr, looks for element with values higher or equal to a and lower or equal to b and return a result as an array.
//
// The function should not modify the array. It should return the new array

/**
 * @param {Array.<number>} values
 * @param {number} a
 * @param {number} b
 *
 * @return {Array.<number>}
 */
function filterRange(values, a, b) {
  return values.filter((value) => value >= a && value <= b);
}

{
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  console.log(filtered);
  console.log(arr);
}

// Filter ange "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//
// The function should only modify the array. It should not return anything.

/**
 * @param {Array.<number>} values
 * @param {number} a
 *
 * @return {Array.<number>}
 */
function filterRangeInPlace(values, a, b) {
  for (let i = 0; i < values.length; i++) {
    if (!(a >= values[i] && b <= values[i])) {
      values.splice(i, 1);
    }
  }
}

{
  let arr = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4);
  // console.log(arr);
}

// Sort in decreasing order
{
  let arr = [5, 2, -1, 1, 7, -10, 8, -9, 6, 9];
  arr.sort((a, b) => b - a);
  console.log(arr);
}

/**
 * @param {Array.<string>} data
 */
function copySorted(data) {
  let copy = data.slice();

  copy.sort((a, b) => a.localeCompare(b));
  return copy;
}
// Copy and sort array
{
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  console.log(sorted);
  console.log(arr);
}

// Create an extendable calculator.
//
// Create a constructor function Calculator that creates "extendable" calculator objects.

function Calculator() {
  this.calculate = function (text) {
    const ops = text.split(" ");
    let a = +ops[0];
    let operator = ops[1];
    let b = +ops[2];

    if (!this[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this[operator](a, b);
  };

  this.addMethod = function (operator, cb) {
    this[operator] = cb;
  };

  this["+"] = function (a, b) {
    return a + b;
  };

  this["-"] = function (a, b) {
    return a - b;
  };
}

const calc = new Calculator();
console.log(calc.calculate("1 + 2"));
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate("2 ** 3"));
console.log(calc.calculate("2 * 5"));
console.log(calc.calculate("5 - 2"));

// Map to names
//
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
{
  const users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
  ];

  const names = users.map((user) => user.name);
  console.log(names);
}

// Map to objects
//
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
{
  const users = [
    { name: "John", age: 25, surname: "Smith", id: 1 },
    { name: "Pete", age: 30, surname: "Hunt", id: 2 },
    { name: "Mary", age: 28, surname: "Key", id: 3 },
  ];

  const usersMapped = users.map((user) => ({
    id: user.id,
    fullName: `${user.name} ${user.surname}`,
  }));

  console.log(usersMapped);
}

function sortByAge(data) {
  return data.sort((a, b) => a.age - b.age);
}

// Sort users by age
//
//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
{
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [pete, john, mary];

  sortByAge(arr);

  console.log(arr);
}

/**
 * @param {Array.<number>} array
 */
function shuffle(array) {
  // for (let i = array.length - 1; i > 0; i--) {
  //   let j = Math.floor(Math.random() * (i + 1));
  //   [array[i], array[j]] = [array[j], array[i]];
  // }

  // Fisher-Yates-shuffle
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    // console.log(array);
  }

  // my naive implementation
  // let randomArray = [];
  // while (randomArray.length < arr.length) {
  //   let random = Math.floor(Math.random() * 3);
  //
  //   if (randomArray.includes(arr[random])) {
  //     continue;
  //   } else {
  //     randomArray.push(arr[random]);
  //   }
  // }
  // arr.splice(0, randomArray.length, ...randomArray);
}

// Shuffle an array
//
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:
{
  // let arr = [1, 2, 3];
  // shuffle(arr);
  // console.log(arr);
  // shuffle(arr);
  // console.log(arr);
  // shuffle(arr);
  // console.log(arr);

  let count = {
    123: 0,
    132: 0,
    213: 0,
    231: 0,
    321: 0,
    312: 0,
  };

  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join("")]++;
  }

  // show counts of all possible permutations
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }
}

/**
 * @param {Array.<number>} arr
 */
function getAverageAge(arr) {
  return arr.reduce((sum, curr) => (sum += curr.age), 0) / 3;
}

// Get average age
//
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.
{
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [john, pete, mary];
  console.log(getAverageAge(arr));
}

// Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

/**
 * @param {Array.<number>} arr
 */
function unique(arr) {
  // this is only good for small data.
  // unique.includes compare v to every element. worst case scenario v does not exist.
  // O(n*2)
  let unique = [];
  arr.forEach((v) => {
    if (!unique.includes(v)) {
      unique.push(v);
    }
  });

  return unique;
}

{
  let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

  console.log(unique(strings)); // Hare, Krishna, :-O
}

// Create keyed object from array
//
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

/**
 * @param {Array.<{ id: string, name: string, age: number}>} users
 */
function groupById(users) {
  return users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

{
  let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ];

  let usersById = groupById(users);
  console.log(usersById);
}
