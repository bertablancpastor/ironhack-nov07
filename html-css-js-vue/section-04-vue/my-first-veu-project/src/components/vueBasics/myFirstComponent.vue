<!--  En el template va el HTML -->
<template>
    <p>My name is Berta and I love programing</p>

<!-- Usando text interpolation syntax BIGOTES -->
<h2>{{berta}}</h2>
<h1>I was born in {{cityOfBirth}}, Catalunya and I am {{age}} yeras. {{truthyValue}}</h1>
<h3>{{myInfo.age}}</h3>
<h3>{{myInfo.countryOfBirth}}</h3>

<hr />
<div>EJERCICIO 00</div>
<h4>My name is {{myBio.name}}, and my date of birthday is {{myBio.dateAge}}. My favortie hobbies are {{myBio.hobbies[0]}}, {{myBio.hobbies[1]}} and {{myBio.hobbies[2]}}. My favorite film is {{favoriteFilm}}, I watched {{numberOfWacth}} times, eating {{favoriteFood}}</h4>


<hr />
<div>EJERCICIO 01</div>

</template>


<!--  En el script va el JS -->
<script setup>

// Si queremos trabajar con datos primitios o no primitivos dentro de nuestro script con el conposition API, tenemos que activar nuestra reactividad. Esta reactividad por de fecto se usan dos tipos de metodos nativos al framework para poder trabajr de una manera reactiva.
// Metodo ref()
//Metodo reactive()

// Passos:
// 1- Importar los metodos des de la libreria de VUE

import {ref, reactive} from "vue";

// 2- Declarar variables que contengan el metodo para poder trabajar correctamente 

// Primative Data Types
const berta = "My Name is BertaB and I love programing";
const cityOfBirth = ref("Barcelona");
const age  = ref(33);
const truthyValue = ref(false);

// REF = Individuales
const favoriteFilm = ref("Wonder");
const favoriteFood = ref("escudella");
const numberOfWacth = ref(12);

// Después generamos tres variables de tipo ref. Una con vuestra peli preferida, la otra con vuestra comida preferida y la tercera con la cantidad de veces que habéis visto vuestra película preferida. Estas también las integráis en el texto de la biografia usando la moustache syntax.

// Non primative data types
//
const myInfo = reactive({
    age:33,
    cityOfBirth: "Barcelona",
    countryOfBirth: "Catalunya",
    learning: true,
});

const myBio = reactive ({
    name: "Berta",
    dateAge: "10/03/1989",
    hobbies: ["programar", "futbol", "bici"], 
});
// Declarar una variable, que dentro de la variable con metodo reactive, apuntar a nombre, fecha nacimiento, array con hobbies, 

</script>


<!-- En el style va el CSS -->
<style>
</style>