// change color jumbotron secction

let butonblue = document.querySelector("#blueBtn");
let butonOrange = document.querySelector("#orangeBtn");
let butonGree = document.querySelector("#greenBtn");

let jumbo = document.querySelector(".jumbotron");

butonblue.addEventListener("click", cambio);
butonOrange.addEventListener("click", cambio1);
butonGree.addEventListener("click", cambio2);

function cambio() {
  jumbo.style.backgroundColor = "#588fbd";
}
function cambio1() {
  jumbo.style.backgroundColor = "#f0ad4e";
}
function cambio2() {
  jumbo.style.backgroundColor = "#87ca8a";
}
