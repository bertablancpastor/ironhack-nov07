// DOM MANIPULATION (Document Object Model)

console.log(window);
console.log(document);
console.log(document.title);
console.log(document.URL);


//1. getElementbyId Metodo
console.log(document.getElementById("example"));

//2. getElementbyClassName
console.log(document.getElementsByClassName(""));

//3. getElementbyTagName
console.log(document.getElementsByTagName(""));

//4. querySelector ()
// Devuele el primer valor que conicida con el selector que se le da.
console.log(document.querySelector("body"));

//5. querySelectorAll ()
// Te devuelve una lista sobre donde estas apuntado

console.log(document.querySelectorAll("body"));

// NODE
//Last Element Child
console.log(document.querySelector("").lastElementChild);

// First Element Child
console.log(document.querySelector("").firstElementChild);

//Children
console.log(document.querySelector("").children);

//parentNode
console.log(document.querySelector("").parentNode); //parentElement es el mismo que parentNode