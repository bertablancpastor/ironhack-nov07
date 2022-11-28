<template>


<div>
  <button @click="decreaseCounter">-</button>
    <h1>{{ number }}</h1>
    <button @click="increaseCounter">+</button>
</div>

</template>

<script setup>
import { ref, reactive } from "vue";

const number = 0;

const increaseCounter = () => {
  number++;
};
const decreaseCounter = () => {
  number--;
};

</script>

<style>

</style>