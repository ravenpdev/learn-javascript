// alert("hello");

// let result = prompt("title");
// console.log(result);

// let age = prompt("How old are you?", 100);
// alert(`You are ${age} years old!`);

// let isBoss = confirm("Are you the bosss?");
// console.log(isBoss);

// Summary
//
// alert - shows a message
//
// prompt - shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is cliked, null.
//
// confirm - shows a message and waits for the user to press "OK" or "Cancel". It returns true for OK and false for Cancel/Esc.
//
//
// All these methods are modal: they pause script execution and don't allow the visitor to interact with the rest of the page until the window has been dismissed.
//
// There are two limitations share by all the methods above:
// 1. The exact location of the modal window is determined by the browser. Usually, it's in the center.
// 2.The exact look of the window also depends on the browser. We can't modify it.
//
//
//
// Tasks:
// 
// A simple page
// Create a web-page that asks for a name and outputs it.
let name = prompt("Enter you name: ");
alert(name);
