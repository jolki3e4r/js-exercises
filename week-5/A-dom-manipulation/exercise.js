/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let ChangeColourBtn = document.querySelector("#bgrChangeBtn");

ChangeColourBtn.addEventListener("click", function() {
  let ChangeColourBodyBtn = "#A9BCF5";
  document.body.style.backgroundColor = ChangeColourBodyBtn;
});

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtnText = document.querySelector("#alertBtn");

alertBtnText.addEventListener("click", function() {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextBtn = document.querySelector("#addTextBtn");

let box = document.querySelector(".jumbotron");

let addTextBtnTagP = document.createElement("p");

addTextBtn.addEventListener("click", function() {
  box.appendChild(addTextBtnTagP);
  addTextBtnTagP.innerHTML = "Read more below.";
});

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerLinksBtn = document.querySelector("#largerLinksBtn");

let LargerLinks = document.querySelectorAll(".article-title--sidebar");

largerLinksBtn.addEventListener("click", () => {
  LargerLinks.forEach(tagA => (tagA.style.fontSize = "1.5em"));
});
