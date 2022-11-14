// Javascript Variable
// Una variable se define como un contenedor (storage area) donde guardamos información /data.

// Ejemplo
 let number = 6

// JS declaracion de Variable
// Tenemos 3 manersas de declarar variables:
//  var, let, const [RESERVED KEYWORDS]

var x;
let y;

// En esto caso en particular, hemos declarado las variable, que tienen nombre x & y, pero estas variable estan vacias ya que no se a localizado ningun tipo de dato en la variable.
// El console saldria undefined
console.log(`The new value of this variable is: ${y}`);

//Se utiliza el oparador = para asignarle un valor a una variable.

y = "The Red Hot Chilli Peppers";
console.log(`The new value of this variable is: ${y}`);
y = 8;
console.log(`The new value of this variable is: ${y}`);

// Condiciones de nomenclatura que podemos referenciar para aclarar dudas:

// / Los naimings de las variables puede ser de: ["letter", "pisoBajo", "guionBajo", "$"]
let a = "hola"
let _a = "hola"
let $a = "hola"
console.log(a, _a, $a);

//JS es sensible a las Mayusculas, es decir si se declara con mayuscula o sin, se declaran dos cosas diferentes

let Mayuscula = "Mayuscula"
let mayuscula = "minuscula"
console.log(Mayuscula);
console.log(mayuscula);

// KEYWORDS QUE NO SE ACCEPTAN

// Hay palabras que son reservadas y no se pueden usar para inicializar una variable como: NEW

//INICIALIZAR VARIABLES
// Usar palabras que su nombre se descriptivo para asignar a las variable facilita la programacion.
// EJEMPLO: si hablamos de ciudades poner cityNames. 

// JS, SIEMPRE usar la convencion de nomenclatura "camelCase" para nombrar variables de mas de una palabra.
// EJEMPLO: firstName, cityName, favoriteFood

// var. CONVENTION
// 1.Es una manera de declarar variables que esta obsoleta, ya que se utiliza let. || const.

// syntax LET
console.log("----Syntax LET----");
let favoriteFood = "Pasta";
console.log(favoriteFood);

favoriteFood = "Escudellla i carn d'olla"
console.log(favoriteFood);


// syntax CONST
console.log("----Syntax CONST----");
// Una vez se inicializa no se pude reassignar, como hace LET. 
// Es la convencion mas moderna de usar variable JS.
const tiposPasta = "macarroni";
console.log(tiposPasta);

// tiposPasta = "spagethi"; // No se puede hacer

// EJEMPLO de guardar datos en variable
// Ejemplo : String
const myMessage = "Js is legit"
console.log(myMessage);
// Ejemplo: Boolean
const isTrue = false;
console.log(isTrue);
// Ejemplo: Arrays
// const myBio = [
//     {
//     firstName: "Berta",
//     lastName: "Blanc",
//     citiesIlIvedIn: ["Barcelona", "Birmingham", "London"],
//     age:33,
//     dob: "10/03/1989",
//     drinkAlcohol: true,
//     }, 
// ]
// console.table(myBio);


// Hola mi nombre es  Berta Blanc, tengo 33 años y me gusta mucho tocar ir en bici.

// let myHobby = [
//     firstName = "Berta",
//     lastName = "Blanc",
//     age = 33,
//     hobby = "ir en bici",
// ]

// console.log;(myHobby);

// console.log(`Hola mi nombre es ${myHobby[0]} y me gusta ${myHobby[3]}`);

let firstName = "Berta"
let lastName = "Blanc"
let age = 33
let hobby = "ir en bici"

console.log(`Hola mi nombre es ${firstName} ${lastName}, tengo ${age}  y me gusta ${hobby}`);

hobby = "cantar"

console.log(`Hola mi nombre es ${firstName} ${lastName}, tengo ${age}  y me gusta ${hobby}`);

