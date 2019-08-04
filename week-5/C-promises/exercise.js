/*
  Promises
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Insert the result of promise1 into the #exercise1 element. Hint: .then()

  EXPECTED RESULT: The #exercise1 element has textContent = "A Promising
  Promise"
*/
const promise1g = document.querySelector("div #exercise1");

function exercise1() {
  const promise1 = resolvedPromise().then(value => {
    promise1g.innerHTML = value;
  });
}

/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()

  EXPECTED RESULT: The #exercise2 element has textContent = "A Unpromising
  Promise"
*/
const promise2g = document.querySelector("#exercise2");

function exercise2() {
  const promise2 = rejectedPromise().catch(value => {
    promise2g.innerHTML = value;
  });
}

/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish

  EXPECTED RESULT: The #exercise3 element has textContent = "A Longer Promise"
*/
const promise3g = document.querySelector("#exercise3");

function exercise3() {
  var promise3 = delayedPromise().then(value => {
    promise3g.innerHTML = value;
  });
}
/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element

  EXPECTED RESULT: The #exercise4 element has textContent = "A Promise from:
  YOUR NAME"
*/
const promise4g = document.querySelector("#exercise4");

function exercise4() {
  var promise4 = concatPromise().then(value => {
    promise4g.innerHTML = value + "Jhonatan Velez";
  });
}
/*
  EXERCISE 5 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that resolves with the string "Hello Promises!".
  Take the result of your promise and insert the it into the #exercise5
  element

  EXPECTED RESULT: The #exercise5 element has textContent = "Hello Promises!"
*/

const promise5g = document.querySelector("#exercise5");

function exercise5() {
  const promise = StretchGoalResolve().then(value => {
    promise5g.innerHTML = value;
  });
  // Write your implementation here
}

/*
  EXERCISE 6 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that rejects with the string "Something went wrong!".
  Take the result of your promise and insert the it into the #exercise6
  element

  EXPECTED RESULT: The #exercise6 element has textContent = "Something went
  wrong!"
*/
const promise6g = document.querySelector("#exercise6");

function exercise6() {
  const promise = StretchGoalReject().catch(value => {
    promise6g.innerHTML = value;
  }); // Write your implementation here
}

//
// -------------------------------------
//
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function resolvedPromise() {
  return Promise.resolve("A Promising Promise");
}

function rejectedPromise() {
  return Promise.reject("A Unpromising Promise");
}

function delayedPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("A Longer Promise");
    }, 2000);
  });
}

function concatPromise() {
  return Promise.resolve("A Promise from: ");
}

function StretchGoalResolve() {
  return Promise.resolve("Hello Promises!");
}

function StretchGoalReject() {
  return Promise.reject("Something went wrong!");
}

exercise1();
exercise2();
exercise3();
exercise4();
exercise5();
exercise6();
