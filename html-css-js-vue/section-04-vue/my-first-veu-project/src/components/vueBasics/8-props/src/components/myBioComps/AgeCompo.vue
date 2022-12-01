<template>
 
  <h1>{{age}}</h1>
</template>

<script setup>
defineProps({
  age: {
    type: Number,
    default: 0,
  },
});
</script>
<style>

</style>