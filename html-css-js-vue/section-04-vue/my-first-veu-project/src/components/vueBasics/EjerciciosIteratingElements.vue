<template>
<div>
    <div id="ej-1">
        <h3>My favorite Movies</h3>
        <ol>
            <li v-for="(favoriteFilm) in favoriteFilms" :key="index">
                {{ favoriteFilm }}
            </li>
        </ol>
    </div>

    <div id="ej2">
        <h3>Favorite Varraible</h3>
        <ul>
            <li v-for="(favoriteVariable, index) in favoriteVariables" :key="index">
            <div>   
                <h4>{{index}}:  {{favoriteVariable}}</h4>
            </div>
            </li>
        </ul>
    </div>

    <div id="ej3">
        <ul>
            <li v-for="(student, index) in students" :key="index">
               <div v-if="student.age >= 18">
                <p>I can go for a few drinks with {{students.name}}after class.</p>
               </div>
               <div v-else>
                <p>{{students.name}} is still too young, they'll have to go home tonight</p>
               </div>
               <ul>
                <li v-for="lenguaje in student.favoriteLanguages">
                {{lenguaje}}
                </li>
               </ul>
            </li>
        </ul>


    </div>



</div>
</template>

<script setup>
import { reactive } from 'vue';
// <!-- // Ejercicios Iterating Elements
// // Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// // Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key. -->

const favoriteFilms = reactive ([
    "Wonder", "Avatar", "Titanic", "Gangs of NY", "Kill Bill"
]);


// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").
const favoriteVariables = reactive ({
    favoriteFood: "pasta",
    favoriteDrink: "beer",
    favoriteSport: "cycling",
    favoriteCountry:"Catalunya",
    favoriteArrayMethod: "sort()",
});

// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list.

const students = reactive ([
    {name: "Georgina", age: "30", favoriteLanguages: ["CSS"]},
    {name: "Raphaela", age: "34", favoriteLanguages: ["HTML", "JS"]},
    {name: "Facu", age: "36", favoriteLanguages: ["JS", "python"]},
]);



</script>

<style>

</style>