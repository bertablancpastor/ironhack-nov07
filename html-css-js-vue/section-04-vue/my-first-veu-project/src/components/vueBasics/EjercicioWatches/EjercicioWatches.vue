<template>
<div>
<h1>Ejercicio Watches</h1>
<!-- // Ejercicio de watchers
// Crea un componente que haga lo siguiente:
// 1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
// 2- De la respuesta en función a un JSON que debes crear
// 3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
// 4- Junto a la contestación, debe aparecer una imagen divertida -->
<h3>Te gusta la pizza?</h3>
<input type="text" v-model="answer" />

</div>
</template>

<script>
import {ref, reactive, watch} from "vue";
import EjercicioWatches from "./EjercicioWatches.json";

const answer = ref("");
const jsonRespone = ref ("");
const jsonImage = ref ("")


// watch(answer, async (newAnswer) => {
//     if (answer.value.toLocaleLowerCase() === "yes" ){
//         jsonRespone.value = jsonAnswer[1].answer + "te encanta la pizza" ;
//         jsonImage.value = jsonAnswer[1].image
//     }
//     else if () {}
//     else {}
// });

// if (newAnswer === "yes") {
//     try {
//      const response = await fetch ("./EjercicioWatches.json");
//      answer.value = (await response.json()).answer;
//     } catch (error) {
//     console.log("Error");
//     }
//     }





</script>

<style>

</style>