<template>
<div>
  <hr />
  <h2>Iteration 5 | Bonus</h2>

  <div class="container" :class="colorBoolean ? 'is-green' : 'is-orange'">
    <h3>Toggleamos entre 2 colores con operador ternario</h3>
    <button @click="changeColorFunction()">Click me to toogle color</button>
  </div>

  <div class="container" :class="colorChange ? 'mi-clase-1' : 'mi-clase-2'" >
    <h3>Toggleamos entre 2 colores con operador ternario</h3>
    <button @click="changeColorFunction1()">Click me to change color</button>

  </div>

</div>
</template>

<script setup>
import {ref, reactive} from "vue";

const colorBoolean = ref (true);
const changeColorFunction = () => {
    colorBoolean.value = !colorBoolean.value
};

const colorChange = ref (false);
const changeColorFunction1 = () => {
    colorChange.value = !colorChange.value
};

</script>

<style scoped>
h2 {
  text-decoration: underline;
}

h3{
    color: #fafafa
}

.container{
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.is-green{
    background: green;
}

.is-orange{
    background: orange;
}

.mi-clase-1{
    background: blue;
}

.mi-clase-2{
    background: grey;
}


</style>