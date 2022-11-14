// JS Conditionals

// Tres tipos de conditionals
//1. if... statment
//2. if...else statment
//3. else... statment

//if - statment

// Syntax

// if (conditon) {
//     //body del conditional if
// }

// Ejemplo if...

// const number =  prompt("Enter a number:  ");

// if (number > 0) {
//     console.log("This number is positive");
// }

// console.log(
//     "Es un caso condicional que solo estamos ejecutando una condicion"
// );

// // if...else - statment
// //Syntax
// // if (condition){
// //     //
// // }else{

// // }

// // Ejemplo if...else
// if (number > 0){
//     console.log("Este numero es positivo");
// }else{
//     console.log("Este numero es negativo");
// }

// // else... if - statment
// // if (condition){
// //     else if (){

// //     }else if{
        
// //     }
// // }
// // Ejemplo else... if

// const dirnkingAge = parseInt (prompt("Want to buy beer? let mme see your ID"));

// if (dirnkingAge < 18){
//     console.log("I am sorry you can't enter");
// }else if (dirnkingAge === 18){
//     console.log("You can enter");
// }else if(dirnkingAge >= 18 && dirnkingAge > 40){
//     console.log("Enjoy your night, but be careful");
// } else if (dirnkingAge >= 40){
//     console.log("Be carefull of your hangover");
// }

// PRACTICE

const promoCine = parseInt(prompt("Que edad tienes?"));

if (promoCine <= 5){
    console.log("Tu entrada es gratis");
}else if( promoCine >= 60){
    console.log("Tu entrada tiene un 20% de descuento");
}else if(promoCine >= 15 && promoCine <= 60){
    console.log("Tu entrada es a precio normal");
}else if(promoCine <= 15){
    console.log("Tu entrada tiene un 40% de descuento");
}