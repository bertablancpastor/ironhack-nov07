<template>
<div>
  <p>CLASS EXCERCISE</p>
<!-- Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas. -->
    <div v-for="(myWatchList, index) in myWatchLists" :key="index">
        <h1>{{ myWatchList.title }}</h1>
        <h2>{{myWatchList.year}}</h2>
        <ul>
            <li v-for="(streaming, index) in myWatchList.whereToWatch" :key="index"> {{ streaming }}</li>
        </ul>
    </div>

    <!-- <h1>List of movies</h1>
    <div v-for="(myWatchList, index) in watchOnNetflix" :key="index">
        <h1>{{ myWatchList.title }}</h1>
        <h2>{{myWatchList.year}}</h2>
        <ul>
            <li v-for="(streaming, index) in watchOnNetflix.whereToWatch" :key="index"> {{ streaming }}</li>
        </ul>
    </div> -->

</div>
</template>

<script setup>
import { reactive } from "vue";

const myWatchLists = reactive ([
    {title: "Wonder", year: 2000, whereToWatch: ["Netflix", "HBO", "Disney+"]},
    {title: "Wonder1", year: 2001, whereToWatch: ["Netflix", "HBO", "Filmin"]},
    {title: "Wonder2", year: 2002, whereToWatch: ["Netflix", "HBO", "AmazonFilm"]},
    {title: "Wonder3", year: 2003, whereToWatch: ["Netflix", "HBO", "Filmin"]},
]);

// const watchOnNetflix = computed (() => {
//     return myWatchLists.filter((movieInNetflix) => movieInNetflix.whereToWatch.includes("Netflix"))
// });


</script>

<style>

</style>