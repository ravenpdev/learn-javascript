// Rewrite with arrow functions


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

ask(
  "Do you agree?",
  () => console.log("You agreed"),
  () => console.log("You canceled the execution")
);


