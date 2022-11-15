console.log("I am ready");

// Iteration 1: Names and Input
console.log("---Names and Input---");

let hacker1 = "Berta";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Jofre";
console.log(`The navigaitor's name is ${hacker2}.`);


// Iteration 2: Conditionals
console.log(`${hacker1} has ${hacker1.length} caracters.`);
console.log(`${hacker2} has ${hacker2.length} caracters.`);

//1er ejemplo - Conditional Tradicional (If, else if, else)
console.log("---1er ejemplo# Conditional tradicional---");
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigaitro has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters. `);
}

 // 2n ejemplo - Operator ternario
 console.log("---2n ejemplo# Operator ternario---");

hacker1.length > hacker2.length 
? console.log(
    `The driver has the longest name, it has ${hacker1.length}`
) 
: hacker1.length === hacker2.length 
?console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters. `
)
:console.log(`It seems that the navigaitro has the longest name, it has ${hacker2.length} characters.`);


// Iteration 3: Loops
console.log("---3.1 Loops---");
//Usando metodo loop sin espacio
let reservedName = "";
for (let i=0; i<hacker1.length; i++) {
    reservedName += hacker1[i].toUpperCase() + "";
}
console.log(reservedName);

//Usando metodo nativo con espacio entre letras
let upperCaseName = hacker1.toUpperCase().split("").join(" ");
console.log(upperCaseName);

console.log("---3.2 Reverse Order---");
//Usando metodo loop
let reverseName = "";
for (let i = hacker1.length - 1; i >=0; i--) {
    reverseName += hacker1[i];
}
console.log(reverseName);

//Usando metodo nativo con espacio entre letras
const reverseNameSimplified = hacker1.split("").reverse().join(" ");
console.log(reverseNameSimplified);

console.log("---3.3 Lexicographic order ---");
//Conditional sencillo
if (hacker1 > hacker2){
    console.log("The driver's name goes first");
}else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

//Condicional sencillo dentrao de una funcion

function ordenLexicoGrafico (string1, string2){
    if (string1 > string2){
        console.log("The driver's name goes first");
    }else if (string1 < string2){
        console.log("Yo, the navigator goes first definitely.");
    }else{
        console.log("What?! You both have the same name?");
    } 
}
ordenLexicoGrafico(hacker1, hacker2);

//Bonus1
console.log("---Bonus 1---");

let lorem = 
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ab ducimus, accusamus corrupti, ratione iure aliquid molestiae voluptas reprehenderit culpa odio dol"
;

let trimmedLorem = lorem.trim();

let etCount = 0;
for (key of trimmedLorem){
    if (key === " ") etCount += 1
}

console.log(`La cantidad de palabras et: ${etCount +1}`);

//Bonus2
console.log("---Bonus 2----");

let text = "amor roma";
let backWardsText = "";

for (let i = text.length - 1; i > 0; i--){
    backWardsText += text[i]
}

if(text.toLowerCase() === backWardsText.toLowerCase()){
    console.log(`${text} is a Palindrome!`);
} else {
    console.log(`${text} is not a Palindrome`);
}

//Ejemplo de Santi
let phraseToCheck = "amor roma"
let phraseToCheckPalindrome = phraseToCheck.split("").reverse().join("");

if (
    phraseToCheck.toLowerCase()==phraseToCheckPalindrome.toLocaleLowerCase()) {
    console.log("THE STRING IS A PALINDROME");
} else {
    console.log("THE STRING IS NOT A PALINDROME");
}
console.log(phraseToCheckPalindrome)
