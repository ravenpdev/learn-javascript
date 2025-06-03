// Date and time
// It stores the date, time and provides methods for date/time

// Creation
// To create a new Date object call new Date() with one of the following argument:

// new Date()
// without arguments - create a Date object for the current date and time:
{
	const now = new Date();
	console.log(now);
}

// new Date(milliseconds)
// create a Date object with the time equal to number of milliseconds (1/1000 of second) passed after the Jan 1st of 1970 UTC+0
//
// an integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
{
	const jan01_1970 = new Date(0);
	console.log(jan01_1970);

	const jan02_1970 = new Date(60 * 60 * 1000 * 24);
	console.log(jan02_1970);

	// Dates before 01.01.1970 have negative timestamps
	const Dec31_1969 = new Date(-60 * 60 * 1000 * 24);
	console.log(Dec31_1969);
}

// new Date(datestring)
// if there is a single argument, and it's a string, then it is parsed automatically. The algorithm is the same as Date.parse uses
{
	const date = new Date("2017-01-26");
	console.log(date);
}

// new Date(year, month, date, hours, minutes, seconds, ms)
{
	console.log(new Date(2011, 0, 1, 0, 0, 0, 0));
	console.log(new Date(2011, 0, 1));
}

// console.log(new Date().getTimezoneOffset());
// console.log(new Date().getDay());
// console.log(new Date().getDate());
