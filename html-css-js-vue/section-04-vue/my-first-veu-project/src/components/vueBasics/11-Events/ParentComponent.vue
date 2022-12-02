<template>
<div>

  <h1>El texto que querais</h1>
  <ChildComponent @sayHi="alertHi"/>
  
</div>
</template>

<script setup>
import CustomEventsEmit from "./ChildComponent.vue"

const alertHi = () => {
    alert("Emit realizado con éxito! :)")

};

</script>


<style>

</style>