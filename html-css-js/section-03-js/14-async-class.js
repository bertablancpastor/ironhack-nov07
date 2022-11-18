//ASYNC

// greet()
function greet(params) {
    console.log("Hola");
    
}

setTimeout(greet, 3000);
console.log("Este mensaje si reproducirà primero porque no tinene timer, pasado dos segundo se ejecutara hola");

function showTime() {
    let dateTime = new Date ();

    let time = dateTime.toLocaleTimeString();
    console.log(time);

    setTimeout(showTime, 8000);
}

// showTime()

//cleartimeout()
//Para detener qualquier llamada a una funcion
//SYNTAX = clearTimeout(internalID)

let count = 0;
function increaseCount() {
    count += 1;
    console.log(count);
}

let id = setTimeout(increaseCount, 3000)

clearTimeout(id)
console.log("Metodo setTimeout frenado...");

//setTimeout ()  - con parametros
// SYNTAX setTimeout(function, milsegundos, param1, param2)

//EJEMPLO
function greetWithParams(name, lastName) {
    console.log("Hello" + " " + name + " " + lastName);
}

setTimeout(greetWithParams, 2000, "Berta", "Blanc");


// CALLBACKS
function greetCallback(name) {
    console.log(`Hello ${name}`);
}
greetCallback("Berta")

function greetCallBackThree() {
    console.log("Hello People");
}

function sayMyName(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greetCallBackThree, 3000);
sayMyName("Berta");

//PROMESAS Y CADENAS DE PROMESAS
//Pueden tener 3 tipos de estados: Pendiente, Cumplida, Rechazada

let promise = new Promise(function (resolve, reject) {
    
});

// EJEMPLO 01 - PROMESAS
let promiseStatus = true;
let countValue = new Promise ((resolve, reject) => {
    if (promiseStatus) {
        resolve("si hay");
    } else {
        reject("no hay")
    }

});
console.log(countValue);

//EJEMPLO 02 - PROMESAS - CHAINING - .THEN() Cadenas que se RESUELVEN

let countValue2 = new Promise((resolve, reject) => {
    resolve("Promise resolved")
});

countValue2.then(function successValue(result){
    console.log(result);
}).then(function successValue1() {
    console.log("Called some times with expansion promise.then()");
})

//EJEMPLO 02 - PROMESAS - CHAINING - .CATCH() Cadenas que se RECHAZAN

let countValue3 = new Promise((resolve, reject) => {
    reject("Promise rejected")
});

countValue3
    .then(function successValue(result){
    console.log(result);
}).catch(function errorValue(result) {
    console.log(result);
});

//EJEMPLO 02 - PROMESAS - CHAINING - .FINALLY() Cadenas que se RECHAZAN

let countValue4 = new Promise((resolve, reject) => {
    resolve("Promise is reolve one more time")
});
countValue4.finally(greet = () => console.log("Codigo ejecutando independient...."));

//EJERCICIO 

