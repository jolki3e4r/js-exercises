/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

function names(n1, n2) {
  return "Hi, I'm " + n1 + "I'm a " + n2;
}

console.log(names(name, danielsRole));

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
