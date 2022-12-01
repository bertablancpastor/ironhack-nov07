<template>
 <div>
    <span class="name">{{props.user.name}}</span>
    <span class="handle">@{{props.user.handle}}</span>
</div>   
  
</template>

<script setup>

const props = defineProps({
    user: Object,
  });

</script>

<style>

</style>