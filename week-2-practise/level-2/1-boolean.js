// The code is valid but the program does not produce the expected result
// Why doesn't it work?
// Fix it.

var isHappy = false;
/* porque el false esta entre comillas como si fuera un STRING*/
if (isHappy == true) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
