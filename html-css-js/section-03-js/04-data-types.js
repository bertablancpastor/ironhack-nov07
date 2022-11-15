// Data types

//Datos Primitivos y noPrimitivos

// DATOS PRIMITIVOS
// Numeros - Es un numero normal o decimal
console.log(4);
console.log(4.4);
//NaN
let f = "hello"
console.log(8/f); // NaN

// Strings - Es un texto alfanumerico dentro de las comillas "" (tant dobles como individuales)
console.log("Hola estoy aprendiendo JS");
console.log('Hola estoy aprendiendo JS');
console.log("4");

// Booleanos - Es un dato de TRUE || FALSE
console.log(true);
console.log(false);

// null
console.log(null);

// undefined
let berta = undefined;
// let berta = "";
console.log(typeof berta);


// symbol
let barcelona = Symbol("borne");
console.log(typeof barcelona);
console.log(Symbol ("borne") === Symbol("borne"));

// DATOS NO PRIMITIVOS

// Arrays y Objectos

// Arrays
// Se inicializan con los []

// Array Example-1
console.log("This is my cool table of Funk Artists");
console.log("Using just a string");
console.table([
    "Daft Punk",
    "Marc Rebillet",
    "Anderson Paak",
    "Sil Sonic",
    "Los Amigo Invisibles",
]);

//Nuestro ejemplo
console.log("Favorite Artists");
console.log("Using a string");
console.table([
    "Manel",
    "Albert Pla",
    "Antonia Font",
    "Reagge per Xicks",
    "Skatalà",
]);

//Array - Exemple 2 - con mix de primative dataTypes
console.log("This is my cool table of Funk Artists");
console.log("Mix of primative dataTypes");
console.table([
    "Daft Punk",
    5,
    "Anderson Paak",
    false,
    "Los Amigo Invisibles",
    undefined,
]);


// Objects
// ejemplo syntax initialitzation = { key: "value" }
console.log("My Bio");
console.table({
    firstName: "Berta",
    lastName: "Blanc",
    ocuppation: "FE - Learner",
    hobbies: ["Nature", "Trekking", "Football"],
    skills: {
    JS: "learning",
    sking: 6,
    guitar: ["Acoustic", "Electronik"],
       },
    },

) ;

// EXAMPLE-2
// Array of objects

// console.movies([
//     {
//     movie: "",
//     genre: [],
//     director: [],
//     location: "",
//     actors: "",
//     year: "",
//     },

//     { 
//     movie: "Wold of Wallstret",
//     genre: ["Drama", "Action", "Comedy"],
//     director: ["Martin Scorsse"],
//     location: "New York city",
//     actors: ["Jonah Hill","Leo Di Caprio"],
//     year: 2016,
//     },
//     {
//     movie: "Fight Club",
//     genre: ["Drama", "Action", "Comedy"],
//     director: ["Martin Scorsse"],
//     location: "New York city",
//     actors: ["Brad Pitt","Eduard Norton"],
//     year: 2022,
//     },
        
// ]);

// console.log(
//     "My favorite actor of the "+ movies + movies[0].actors(1));
// console.log(`My favorite actor of the`${movies.movie[0].actors[1]});

const myBio = [
    {
    firstName: "Berta",
    lastName: "Blanc",
    citiesIlIvedIn: ["Barcelona", "Birmingham", "London"],
    age:33,
    dob: "10/03/1989",
    drinkAlcohol: true,
    }, 
]

console.table(myBio);
console.log(myBio[0]);
console.log(`Alchol drinker ${myBio[0].drinkAlcohol}`);

const myFavoriteBook = [
    {
    bookName: "Momentos estelares de la humanidad",
    genre: "historia" ,
    author: "Stefan Zwig",
    year: 1956,
    ISBN: "9783100025401" ,
    },

    // {
    // bookName: "Relampagos" ,
    // genre: "ficcion",
    // author: "Jean Echenoz" ,
    // year: 2012 ,
    // ISBN: 
    //     },

]

console.log(`My favorite book is ${myFavoriteBook[0].bookName}`);