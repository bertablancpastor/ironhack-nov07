<template>
<div>
  <hr />
  <h2>Iteration 3</h2>

  <h3 v-if="(number === 0)">This number is equal 0</h3>
  <h3 v-else>Is not equal 0</h3>

  <div>
    <h3 v-if="conditional">Mostramos el elemento dependiendo del booleano TRUE</h3>
    <h3 v-else>Mostramos el booleano FALSE</h3>
  </div>

</div>
</template>

<script setup>
import { ref } from "vue";

const number = ref(12);
const conditional = ref(false);

</script>

<style scoped>
h2 {
  text-decoration: underline;
}

</style>