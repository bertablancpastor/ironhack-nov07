//Function
//Una funcion es un bloque de codigo que realiza una tarea especifica.

//Ventajas
//1- La funcion hace que el codigo sea reutilizable
//2- Hace que el programa sea mas facil
//3-Aumentar la visinilidad


//SYNTAX 
//   function nameOfFuction (){
//      fuction body
//      }
//   nameOfFuction ()

//Ejemplo 1
// console.log("--- Simple Function ---");

// function greet (){
//     console.log("Hola!");
// }
// greet ();

// // Ejemplo 2
// console.log("--- Simple Function with Parametres ---");

// function greetWithParams (name) {
//     console.log(`Hello ${name}`);
// }
// // let userName = prompt("Please, enter your name: ")
// // greetWithParams(userName);

// // Ejemplo 3
// console.log("--- Simple Function with Two Parametres ---");
// function add(a,b){
//     console.log(`El total de esta suma es: ${a+b}`);
// }
// add(20,10);


// //Declarar functions con return
// //Ejemplo 4
// console.log("--- Functions with two parametres && return ---");

// function addithReturn(a,b) {
//     return a + b
// }

// let number1 = parseFloat(prompt("1st Number"));
// let number2 = parseFloat(prompt("2nd Number"));
// let result = addithReturn(number1,number2);
// alert(`La suma de estos 2 num es: ${result}`);

// Functions expressions
// Las funciones pueden definirse como expressiones.

let x = function (num){
    return num * num;
};

console.log(x(4));

let y = x(3);
console.log(y);

// Arrow functions

let exampleFunc = function (x,y){
    return x * y;
}

// es lo mismo que con la funcion flecha
let exampleArrowFunc2 = (x,y) => x * y;



// SYNTAX
// let myFunction = (arg1, arg2, arg3)
//Ejemplos:
console.log(
    " Arrow Function - multiple params - multiple lines dentro del body"
);

let sum = (a,b) => {
    let result = a + b;
    return result;

};

let resultOfSum = sum (5,89);
console.log(resultOfSum);

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera. Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad". Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

let livesIn = {livesInCity:true, livesInTown:false}

const functionExercice = (name, age, livesIn) => {
    if (livesIn.livesInCity) {
    return `${name} tienen ${age} años y vive en la ciudad.`;
   } else {
    return `${name} tienen ${age} años y vive en un pueblo.`;
   }

}
 console.log(functionExercice ("Diego",30, livesIn.livesInCity));

 // Function Ternario
console.log("---Function Ternario---");
 const functionExercice2 = (name, age, livesInCity) => 
 livesIn.livesInCity 
 ? `${name} tienen ${age} años y vive en la ciudad.` 
 : `${name} tienen ${age} años y vive en un pueblo.`;

 console.log(functionExercice2 ("Diego", 25, livesIn.livesInCity));

 const functionExercice3 = (name, age, livesInCity) => {
    let tCity;

    switch(true){
        case livesIn.livesInCity:
            tCity = "ciudad";
            break;
        case livesIn.livesInTown:
            tCity = "pueblo";
            break;
        default:
            break;

    }

    return `${name} tiene ${age} años y vive en un ${tCity}.`;
 }

 console.log(functionExercice3("Jarko", 30, { livesInCity: true, livesInTown: false }));