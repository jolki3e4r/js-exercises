/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

/*FORMATO DE MONEDA
  ===================
El negocio ahora está entrando en el mercado brasileño.
Escribe una nueva función para convertir al real brasileño.
También han decidido que deben agregar una tarifa del 1 % a todas las transacciones en el extranjero.
Encuentre una manera de agregar un 1 % a todas las conversiones de moneda(piense en el principio DRY)
*/

function convertToUSD() {
  return price * 1.27 + price * 0.01;
}

function convertToBRL(price) {
  return price * 4.89 + price * 0.01;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 200;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
