/*
  PIPING FUNCTIONS
  ================
  Using the provided functions:
  - multiply `startingValue` by 2
  - add 10
  - format
  - assign to the variable `result`

  As a learning exercise (you wouldn't do this normally), do all of the above in 1 line of code 
*/
/*
Funciones de canalización
  ================
Usando las funciones proporcionadas:
- multiplica`startingValue` por 2
  - añadir 10
    - formato
    - Asignar a la variable`resultado`

Como ejercicio de aprendizaje(no lo haría normalmente), haga todo lo anterior en 1 línea de código
  */

var startingValue = 2;

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(num) {
  return "£" + num.toFixed(2);
}

console.log("Expected result: 20.00");
console.log("Actual result: " + result);
