// Loop
// Nos permite repetir una funcion sin necessidad de escribir-la tantas veces como quieres que se repita

// FOR LOOP
//Syntax
// for (expresionInicial, condicion actualizacionDeExpresion){
//     body bucle for
// }

//Ejemplo Simple

// // console.log("--- FOR LOOP | Ejemplo Simple ---");

// // const forLoopExample = 10;
// // for (let i = 1; i <= forLoopExample; i++){
// //     console.log("JS is legit - FOR LOOP");
// // }

// console.log("--- FOR LOOP | Ejemplo Array ---");

// const cities = ["BCN", "TKYO", "BRLIN", "HELS"];
// for (let i = 0; i < cities.length; i++){
//     console.log(`. ${cities[i]}`);
// }


// // console.log("--- FOR LOOP | Ejemplo Array mixto ---");
// // const mixedArray = [4, 12, "bcn", 1, true, "esplugues", "2022", "gener", 1, 4];
// // function sum (arrayProperty) {
// //     let mixedSum = 0;
// //     for (let i =0; i <arrayArgument.length; i ++){
// //         if(typeof arrayArgument[i] === "string"){
// //             str = arrayArgument[i].split("");
// //             for (let i =0; i < str.length; i++){
// //                 mixedSum += str[i].length;
// //             }
// //         }else if (arrayProperty[i] === true){
// //             mixedSum += 1;
// //         } else {
// //             mixedSum += arrayProperty[i];
// //         }
// //     }
    
// //     return mixedSum;
// // }

// // console.log("Sum of a mixed array:");
// // console.log(sum (mixedArray));


// console.log("--- FOR LOOP | Ejemplo Array objectos caso real ---");

// const data1 = [
//     {name: "Diego", age: 30, grupo: "A"},
//     {name: "Jarko", age: 25, grupo: "B"},
//     {name: "Aleix", age: 23, grupo: "C"},
// ];

// for (let i = 0; i < data1.length; i++){
//     console.log(`.${data1[i].age}`);
// }


// //JS WHILE LOOP
// //Syntax
// // while (conditon){
// //     //body del bucle while
// // }

// //Example
// const whileLoopArrayExample = ["BCN", "TKY", "BERL", "HELSK"];

// let lenghtOfWhileArrayExample = whileLoopArrayExample.lenght;

// let count = 0;

// while (lenghtOfWhileArrayExample--) {
//     console.log(`${whileLoopArrayExample[count]}`);
//     count++;
// }


// console.log("--- FOR LOOP | Ejemplo Array Simple ---");
// let i = 1
// let n = 5

// while (i <= n){
//     console.log(i);
//     i += 1;
// }

// console.log("--- FOR LOOP | Ejemplo Array objectos caso real ---");

// const data2 = [
//     {name: "Diego", age: 30, grupo: "A"},
//     {name: "Jarko", age: 25, grupo: "B"},
//     {name: "Aleix", age: 23, grupo: "C"},
// ];

// for (let i = 0; i < data2.length; i++){
//     console.log(`.${data2[i].name}`);
// }

// EJERCICIO - 001
// Dado un array, devolver el tipo de dato que hay en cada una de sus posiciones
// const ejer1 = [
//     {nombre: "ejem1", numero: 1, tipo: "A"},
//     {nombre: "ejem2", numero: 2, tipo: "B"},
//     {nombre: "ejem3", numero: 3, tipo: "C"},
// ];


// for (let i = 0; i < ejer1.length; i++) {
//     console.log(typeof ejer1[i]);
// }

//EJERCICIO - 002
//Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

let arr = ["Messi", "Obama", "Bruce Sprinsting"];
for (let i =0; i < arr.length; i++) {
    console.log(`${arr[i]} is famous, I like it.`);
}
