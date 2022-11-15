// Operador
// En JS, un operador es un symbolo especial que nos ayuda a ejectura operacions en operandos.

const add = 2 + 3;
console.log(add);

//Operador aritmetrico: "+" es un symbolo matematico de operacion. Suma 2 + 3

// Tipo de Operadores:

// Assignment Operators
// Usamos  el operador "=" es lo que usamos para apuntar la assignacio matetamatica con la variacion "add"


// Arithmetric Operators
// Comperation Operators
// Logical Operators
// Bitwise Operators
// String Operators

// JS Comparison Operators
// Operadors de comparation, compran dos o mas valores y retorarn un valor booleanico.

let number1 = 3;
let number2 = 2;

console.log("Comparing these 2 numbers");
console.log(number1 > number2);

console.log("Comparison Operator");
console.log(8 == 8);
console.log(8 != 4);
console.log(8 === "8");
console.log(8 !== "8");
console.log(4 > 2);
console.log(4 < 2);
console.log(2 >= 2);
console.log(5 <=9);

// JS Logical Operators
// Ejectuan operaciones logicas, que nos ayudan a segmentar ciertas operaciones.

const numberA = 5;
const numberB = 3;

console.log(`The comparasion of these number is ${numberA < 6 && numberB < 5}`);

// Logical AND &&
console.log(true && true);
console.log(true && false);

// Logical OR ||
console.log(true || false);
console.log(false || false);

// Logical NOT 
console.log(!true);

// Strings + operators
// En JS se puede utilizar operadors para operacions que no corresponden a matematica o logica contextua

function addTwoNumbers (num1, num2){
    return num1 + num2;
}
console.log(addTwoNumbers(8,4));

//PRACTICE
console.log("---PRACTICE---");
let num = 8
let str = "8"

console.log(num == str);
console.log(num === str);
console.log(num < 18);
console.log(num > 18);
console.log(num >= 18);

