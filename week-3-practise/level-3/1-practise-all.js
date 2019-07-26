/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, frue, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

//resolvemos el ejercicio con una exprecion regular se crea una variable
//y se encerra entre slashes y corchetes y colocamos el rango en cual se quiere buscar///explorar
let exRegular1 = /[0-9]/;
let exRegular2 = /[a-z]/;
let exRegular3 = /[A-Z]/;
let exRegular4 = /[!, #, $, %,.]/;

// creamos la funcion y recorremos el array con un map y comparamos los items
//con de cada array con las varables

PasswordValidationResult = password.map(
  item =>
    exRegular1.test(item) &&
    exRegular2.test(item) &&
    exRegular3.test(item) &&
    item.length > 5 &&
    exRegular4.test(item)
);
console.log(PasswordValidationResult);
