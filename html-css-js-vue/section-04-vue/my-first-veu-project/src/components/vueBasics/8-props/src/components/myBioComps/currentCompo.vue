<template>
    <h1>{{currentLocation}}</h1>
   
  
  </template>
  
  <script setup>
  defineProps({
    currentLocation: {
    type: String,
    required: true,
    default: "Some random place",
  },
  });
  
  </script>