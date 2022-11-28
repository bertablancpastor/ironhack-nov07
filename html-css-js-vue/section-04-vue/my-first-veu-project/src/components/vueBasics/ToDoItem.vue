<template>

    <div>
        <input type="checkbox" id="todo-item">
        <label for="todo-item">My Todo Item</label>
    </div>

    <div>I am {{toDoItem}}to practice the program {{program}}.</div>
  
</template>

<script setup>

import { reactive, ref } from "vue";

const toDoItem = ref("practice with vue");
const program = ref("Vue");


</script>

<style>

</style>