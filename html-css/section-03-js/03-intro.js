// LA CONSOLA .LOG
console.log ("Hola mi nombre es Berta!")
// El .log que vemos es un metodo, y logea lo que esta dentro del metodo lo que esta dentro de los parentesis.

// El Document
// Puntos para acceder a la pagina web

console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.all); 
// all puede mostrar informacion vulnerable en la consola
// console.log(document.all[7].textContent = "Provando basics JS");

console.log((document.all[7].innerHTML = "Provando basics JS"));

console.log(document.links);
// Expone los links que hay en una web

// LA CONSOLA .TABLE
// Muestra datos tabulares como una tabla
console.table(["Barcelona", "Berlin", "Tokyo", "Liverpool"])

console.table(["Viladamat", "Cadaqués", "Ultramort", "Espolla"])



