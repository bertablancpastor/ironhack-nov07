
<template>

<div>
  <h1>
    My name is {{ name }}, I was born in 
    {{ cityOfBirth }}, and I am
    {{ age }} years old.
  </h1> 
  <h2>My name is {{ name }}, I am 
    {{ myInfo.age }}, and I am from {{ myInfo.countryOfBirth }}, born in {{ cityOfBirth }}. 
  </h2>

  <img v-bind:src="imgIron.image" :alt="imgIron.alternativetext" />
 
<div>
  <button @click="helloWorld">Click me</button>
  
</div>

</div>

</template>

<script setup>
import { ref, reactive } from "vue";

const name = ref("Berta")
const cityOfBirth = ref("Barcelona");
const age = ref(33);
const countryOfBirth = ref("Catalunya");

const myInfo = reactive({
  name: "Berta",
  age: 33,
  cityOfBirth: "Barcelona",
  countryOfBirth: "Catalunya",
});

const imgIron = reactive({
  image: "https://pbs.twimg.com/profile_images/1415614665128882178/fjY5OzeM_400x400.jpg",
  alternativetext: "logo ironhack",
});


const helloWorld = () => {
  console.log("Hello World");
  alert("Hello World")
};


</script>

<style>

</style>