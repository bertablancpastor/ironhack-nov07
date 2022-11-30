<template>
  
  <h2 v-if="(number === 0)">This number is equal 0</h2>
  <h1 v-else>Is not equal 0</h1>


</template>

<script setup>
import { ref } from "vue";
const number = ref(12);

</script>

<style>

</style>