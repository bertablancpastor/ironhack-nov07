<template>
<div>
    <!-- Anidacion de padre a hijo -->
  <!-- <h1>Hello!</h1> -->

  <div>
   

  </div>
  <!-- Anidacion de abuelo a padre a hijo -->
  <div>
    <NameCompo :name="name" />
    <AgeCompo :age="age" />
    <birthCompo :birthPlace="birthPlace"/>
    <currentCompo :currentLocation="currentLocation"/>
  </div>

</div>
</template>

<script setup>

import {ref, reactive} from "vue";
import NameCompo from "./myBioComps/NameCompo.vue"
import AgeCompo from "./myBioComps/AgeCompo.vue"
import birthCompo from "./myBioComps/birthCompo.vue"
import currentCompo from "./myBioComps/currentCompo.vue"

defineProps({
  name: {
    type: String,
    required: false,
    default: "Some Random Name",
  },
  age: {
    type: Number,
    default: 0,
  },
  birthPlace: {
    type: String,
  },
  currentLocation: {
    type: String,
    required: true,
    default: "Some random place",
  },
});

</script>

<style>

</style>