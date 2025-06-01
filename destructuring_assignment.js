// Destructuring assignment
//
// The two most used data structures in JavaScript are Object and Array.
//
// - Objects allow us to create a single entity that stores data tiems by key.
// - Arrays allow us to gather data items into an ordered list.

// Array destructuring
const arr = ["John", "Smith"];
const [firstName, surName] = arr;
console.log(firstName);
console.log(surName);

const [fName, lName] = "John Smith".split(" ");
console.log(fName, lName);

// Ignore elments using commas
const [name, , title] = ["Julius", "Caesar", "Consul", "of the roman republic"];
console.log(title);

// Works with any iterable on the right-side
const [a, b, c] = "abc";
const [one, two, three] = new Set([1, 2, 3]);

// Assign to anything at the left-side
// We can use any "assignables" on the left side.
{
	const user = {};
	[user.name, user.surname] = "John Smith".split(" ");
	console.log("user.name", user.name);
	console.log("user.surname", user.surname);
}

{
	const user = {
		name: "John",
		age: 30,
	};

	for (const u of Object.entries(user)) {
		console.log(`${u[0]}: ${u[1]}`);
	}

	for (const [key, value] of Object.entries(user)) {
		console.log(`${key}: ${value}`);
	}
}

// Swap variable trick
{
	let guest = "Jane";
	let admin = "Pete";

	[guest, admin] = [admin, guest];
	console.log(guest, admin);
}

// The rest `...`
// Usually, if the array is longer than the list at the left, the "extra" items are omitted.
// If we'd like also to gather all that follows - we can add one more parameter that gets "the rest" using three dots "..."
{
	const [name1, name2, ...rest] = [
		"Julius",
		"Caesar",
		"Consul",
		"of the Roman Republic",
	];
	console.log(name1);
	console.log(name2);
	console.log(rest.length);
}

// Default values
// If the array is shorter than the list of variables onn nthe left, there will be no errors. Absent values are considered undefined:
{
	const [firstName, surname] = [];
	console.log(firstName);
	console.log(surname);

	// if we want a "default" value to replace the missing onne, we can provide it using =:
	const [name = "Guest", dname = "Anonymous"] = ["Julius"];
	console.log(name); // Julius (from array)
	console.log(dname); // Anonymous (default used)
}

// Default values can be more complex expressions or even function calls. They are evaluated onnly if the value is not provided.
//
// For instance, here we use the prompt function for two defaults:
{
	const [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];
	console.log(name);
	console.log(surname);

	// Please note: the prompt will run only for the missing value (surname).
}

// Object destructuring
// The destructurinng assignment also works with objects.
// The basic syntax is:
// let {var, var2} = {var1:..., var2:...}
{
	const options = {
		title: "Menu",
		width: 100,
		height: 200,
	};
	// The order does not matter.
	const { title, width, height } = options;
	console.log(title);
	console.log(width);
	console.log(height);
}
// If we want to assign na property to a variable with another name, for instance, make optionns.width ggo into the variable named w, then we cann set the variable name usingn a colon:
{
	const options = {
		title: "Menu",
		width: 100,
		height: 200,
	};

	const { width: w, height: h, title } = options;
	console.log(title);
	console.log(w);
	console.log(h);
}

// For potentially missing propeties we can set default values using "=", like this:
{
	const options = {
		title: "Menu",
	};

	const { width = 100, height = 200, title } = options;
	console.log(title);
	console.log(width);
	console.log(height);
}

{
	const options = {
		title: "Menu",
	};
	const { width = prompt("width?"), title = prompt("title") } = options;
	console.log(title); // menu
	console.log(width); // (whatever the result of the prompt is)
}

{
	const options = {
		title: "Menu",
	};
	const { width: w = 100, height: h = 200, title } = options;
	console.log(title);
	console.log(w);
	console.log(h);
}

{
	const options = {
		title: "Menu",
		height: 200,
		width: 100,
	};

	const { title, ...rest } = options;
	console.log(title);
	console.log(rest.height);
	console.log(rest.width);
}

// Nested destructuring
{
	const options = {
		size: {
			width: 100,
			height: 200,
		},
		items: ["cake", "donut"],
		extra: true,
	};

	const {
		size: { width, height },
		items: [item1, item2],
		title = "Menu",
	} = options;
	console.log(title);
	console.log(width);
	console.log(height);
	console.log(item1);
	console.log(item2);
}

// Tasks
// Write the destructuring assignment that reads:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
{
	const user = { name: "John", years: 30 };
	const { name, years: age, isAdmin = false } = user;
	console.log(name);
	console.log(age);
	console.log(isAdmin);
}

// Tasks
// The maximal salary
// Create the function topSalary(salaries) that returns the name of the top-paid person.
//     If salaries is empty, it should return null.
//     If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
/**
 * @param {Record<string, any>} salaries
 */
function topSalary(salaries) {
	let topPaidName = null;
	let topSalary = 0;

	for (const [name, salary] of Object.entries(salaries)) {
		if (topSalary < salary) {
			topSalary = salary;
			topPaidName = name;
		}
	}

	return topPaidName;
}

/**
 * @param {Record<string, any>} salaries
 */
function topSalary2(salaries) {
	// let map = new Map();
}

let result = topSalary({});
console.log(result);
result = topSalary({
	John: 100,
	Pete: 300,
	Mary: 250,
});
console.log(result);
