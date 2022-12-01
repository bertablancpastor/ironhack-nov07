<template>
  <img :src="props.profileImage" className="profile" alt="profileImage"/>
</template>

<script setup>
const props = defineProps ({
    profileImage: String,
})


</script>

<style>

</style>