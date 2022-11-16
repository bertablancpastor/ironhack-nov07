//Como manipular elementos en el DOM

const createElement = document.createElement("div");
console.log("createElemene tiene esta estructua: ");
console.log(createElement);

createElement.innerHTML = "JS es demasiado COOL";
console.log(createElement);

createElement.innerText = "JS es demasiado COOL";
console.log(createElement);

//Como anexar elementos creado en js al doc de HTML

// Un solo selector
// let parentElement = document
// .querySelector("#parent")
// .appendChild(createElement);

// Anidada
// let parentElement = document
// .querySelector ("#parent #firstchild")
// .appendChild(createElement);

//Ejemplo
createElement.className = "ejemplo1";
console.log(createElement);

//EJERCICIOS
// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"> </div>

let parentElement = document.querySelector("#insert-p");
let createdElement = document.createElement("p");
createdElement.innerText = "Practicando";

parentElement.appendChild(createdElement);

// 2º - Crea un <div id="nested"></div> desde código
let newParentElement = document.querySelector("body");
let createdElement1 = document.createElement("div")
createdElement1.id = "nested";

newParentElement.appendChild(createdElement1)

//replaceChild
// parentElement.replaceChild(createdElement1 createdElement2);

//eliminar un texto
const firstChild = document.querySelector("#firstchild")
const parent = document.querySelector("#parent");

parent.removeChild(firstChild);

console.log(firstChild);

//Como añadir estilo CSS
// SYNTAX addEventListener("click", elNombredeMiFuncion)
// const buttonEl = document.querySelector("#master");
// const addFuncion = () => buttonEl.classList.add ("button")
// buttonEl.addEventListener("click", addFuncion);


//Eliminar clases
// const buttonEl = document.querySelector("#master");
// const removeFunction = () => {
//     document.querySelector("body").classList.remove("remove-test2");
// };

// buttonEl.addEventListener("click", removeFunction);


// const buttonEl = document.querySelector("#master");
// const toggleFunction = () => 
//     document.querySelector(".box-display").classList.toggle("remove-test");
// buttonEl.addEventListener("click", toggleFunction);

//1_ Crea un boton, al ser pulsado, introduza en el dom un <p>Texto insertado<p>
const button = document.querySelector("#master");
const div = document.querySelector("#exercici1")
let createdElementP = document.createElement("p");
createdElementP.innerText = "Practicando";

const addFuncion = () => div.appendChild(createdElementP)
button.addEventListener("click", addFuncion);

//2_Elemento de color verde y un bono para togglear el color de verde a rojo
const buttonGreen = document.querySelector("#green");
    const toogle = () => 
document.querySelector(".box-display").classList.toogleFunction("remove-test");
buttonGreen.addEventListener("click", toggleFunction);
