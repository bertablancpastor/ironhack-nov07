<template>
<hr />

<h2> Iteration 2 </h2>
<!-- Iteracion 2 - parte 1 -->
  <h3>{{2 + 2}}</h3>
<!-- Iteracion 2 - parte 2 -->
  <div>
    <h3>{{iteration2()}}</h3>
  </div>

<!--  Iteration 2 - parte 2 computed propierties && v-model -->

<div>
  <input type="text" v-model="num1" />
</div>
<span>+</span>
<div>
  <input type="text" v-model="num2" />
</div>
<div>
  <h3>El resultat es: "{{resultat}}"</h3>
</div>

</template>

<script setup>
import { ref, computed } from "vue";

// Iteracion 2 - parte 2
const iteration2 = () => {
  return "Retornando el valor de la función";
};

// Iteration 2 - parte 2 extendida
const num1 = ref(0);
const num2 = ref(0);

const resultat = computed (() => {
  return parseInt(num1.value) + parseInt(num2.value);
});




</script>

<style scoped>
h2 {
  text-decoration: underline;
}
</style>