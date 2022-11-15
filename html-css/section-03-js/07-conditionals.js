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

// const promoCine = parseInt(prompt("Que edad tienes?"));

// if (promoCine <= 5){
//     console.log("Tu entrada es gratis");
// }else if( promoCine >= 60){
//     console.log("Tu entrada tiene un 20% de descuento");
// }else if(promoCine >= 15 && promoCine <= 60){
//     console.log("Tu entrada es a precio normal");
// }else if(promoCine <= 15){
//     console.log("Tu entrada tiene un 40% de descuento");
// }

// const number2 = prompt("Enter a number between 1-2");

// if (number2 == 1) console.log("You choice 1");
// else console.log("YOu choice 2");


// switch statment

 // Syntax 
// switch (variable/expresion) {
// case 1: 
// break;
// case 2:

// }

// Exemple  SWITCH

// let switchExample1 = 2;
// switch(switchExample1){
//     case 1:
//         switchExample1 = "one";
//         break;
//     case 2:
//         switchExample1 = "two";
//         break;
//     default:
//         switchExample1 = "not found";
    
// }
// console.log(`The value is ${switchExample1}`);

// let switchExample2 = 1;
// switch(switchExample2){
//     case "1":
//         switchExample2 = 1;
//         break;
//     case 1:
//         switchExample2 = "one";
//         break;
//     case 2:
//         switchExample2 = "two";
//     default:
//         switchExample2 = "not found";
    
// }
// console.log(`The value is ${switchExample2}`);


console.log("---Ejemplo complejo - Calculadora---"); 

// let result;

// const operator = prompt("Enter operator (either +, -, * or /):");

// const calcNum1 = parseFloat(prompt ("Enter 1st number: "));
// const calcNum2 = parseFloat(prompt ("Enter 1st number: "));

// switch (operator){
//     case "+":
//         result = calcNum1 + calcNum2
//         console.log(`${calcNum1} + ${calcNum2} = ${result}`);
//     break;
//     case "-":
//         result = calcNum1 - calcNum2
//         console.log(`${calcNum1} - ${calcNum2} = ${result}`);
//     break;
//     case "*":
//         result = calcNum1 * calcNum2
//         console.log(`${calcNum1} * ${calcNum2} = ${result}`);
//     break;
//     case "/":
//         result = calcNum1 / calcNum2*
//         console.log(`${calcNum1} / ${calcNum2} = ${result}`);
//     break;
//     default:
//         console.log("This is not a valid operator for this simple calculator, if you want power go invest omn a TI - 30XIIS Calculator, don't be cheap... or use your phone ");
// }

console.log("---Ejemplo complejo - Contry continent finder---");

let countryOfOrigin = prompt ("What country where you born?");


switch(countryOfOrigin.toLocaleLowerCase()) {
    case "venezuela":
    case "colombia":
    case "ecuador":
    case "brazil":
        alert(`Cool, ${countryOfOrigin} is located in South of America`);
        break;
    case "spain":
    case "france":
    case "portugal":
    case "andorra":
        alert (`Cool, ${countryOfOrigin} is located in Europe`);
    default:
        alert (`You are not from this planet`);
}
