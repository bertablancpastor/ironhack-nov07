const arr = [1,2,3,4,5,1];

const animals = ["dog", "cat", "fish", "cow"]

const mapped = arr.map((param) => param + 20);
console.log(mapped);

const newAnimals = animals.map((animalsPerArray) =>{
    const storage = animalsPerArray;
    console.log(storage);
    return storage
}) 

const filtered = arr.filter ((element) => element == 2 || element === 4);
console.table(filtered)

const filteredAnimals = animals.filter((element) => element == "cat" || element == "fish" );
console.table(filteredAnimals);

const alphabet = ["f", "a", "c"];

let ascend = alphabet.sort((a, c) => (a > c ? 1 : - 1));
console.log(ascend);

let descend = alphabet.sort((a, c) => (a > c ? - 1 : 1));
console.log(descend);


alphabet.forEach((element) =>{
    console.log(element);
})

const arra1 = ["milan", "tokyo"];
const arra2 = ["miami", "chicago"];
const arra3 = ["london", "paris"];

console.log(arra1.concat(arra2, arra3));

const greaterFive = arr.every ((num) => {num > 5;
});
console.log(greaterFive);

const greaterFiveSome = arr.some((num) => num > 5);
console.log(greaterFiveSome);

console.log(arr.includes(2));

const joinArr = ["B",".", "B", ".", "P"]
console.log(joinArr.join(""));

const reduced = arr.reduce((total, current) => total + current );
console.log(reduced);

//EJERCICIO
let arrAdd = ["B",".", "B", ".", "P"];

const add = (arrAdd) => {

    arrAdd.unshift(arrAdd[1]);
    arrAdd.push(arrAdd[0]);

    return arrAdd
}


console.log(add(arrAdd));

// find

const found = arr.find((element) => element > 2);
console.log(found);

const indexFinder = animals.findIndex((element) => element === "cow");
console.log(indexFinder);

const fillMode = new Array (4);
console.log(fillMode);
console.log(fillMode.fill(["Berta"]));


const slicedArr = ["a", "b", "c", "d", "e", "f"];
const sliced = slicedArr.slice(2,3);
console.log(sliced);


let revArr = [1, 2, 3]
console.log(revArr.reverse());

// AÑADE AL FINAL
console.log(animals.push("elephant"));
console.log(animals);

// ELIMINA AL FINAL
console.log(animals.pop());
console.log(animals);

// ELIMINA AL INICIO
animals.shift()
console.log(animals);

//AÑADE AL INICIO
animals.unshift("elephant")
console.log(animals);