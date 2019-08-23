// change color jumbotron secction

let butonblue = document.querySelector("#blueBtn");
let butonOrange = document.querySelector("#orangeBtn");
let butonGree = document.querySelector("#greenBtn");
let donateBtn = document.querySelector("#Donatebike");
let volunteerBtn = document.querySelector("#Volunteer");
let jumbo = document.querySelector(".jumbotron");
let submit = document.querySelector("#submit");

butonblue.addEventListener("click", cambio);
butonOrange.addEventListener("click", cambio1);
butonGree.addEventListener("click", cambio2);

function cambio() {
  jumbo.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
}
function cambio1() {
  jumbo.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
}
function cambio2() {
  jumbo.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "black";
  volunteerBtn.style.backgroundColor = "#8c9c08";
  //volunteerBtn.style.color = "white";
}
submit.addEventListener("click", validate);
let carater = /\w+@\w+\.+[a-z]/;

function validate() {
  let name = document.querySelector(".name").value;
  console.log(name);
  let email = document.querySelector(".email").value;
  console.log(email);
  let description = document.querySelector(".description").value;
  console.log(description);
  if (name === "" || description === "" || email === "") {
    alert("the fields are mandatory");
    //funcion que evita que envie la informacion cuando no es valida
    let form = document
      .querySelector("#form")
      .addEventListener("submit", function(envio) {
        envio.preventDefault();
      });
  } else if (!carater.test(email)) {
    alert("el formato del email debe ser correcto");
    let form = document
      .querySelector("#form")
      .addEventListener("submit", function(envio) {
        envio.preventDefault();
      });
  }
}
