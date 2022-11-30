<template>
    <hr />
    <h2>Iteration 4</h2>
    <div v-for="(listPost, index) in listPosts" :key="index">
        <div>
            <h3>{{index}} - {{listPost.title}}</h3>
            <h4>{{listPost.description}}</h4>
            <h5>{{listPost.content}}</h5>
        </div>
    </div>
    
    
  
</template>

<script setup>

import { reactive } from "vue";

const listPosts = reactive ([
    {title: "Ex1", description: "This is the DESCRIPTION of the Ex1"  , content: "This is the CONTENT of the Ex1"},
    {title: "Ex2", description: "This is the DESCRIPTION of the Ex2"  , content: "This is the CONTENT of the Ex2"},
    {title: "Ex3", description: "This is the DESCRIPTION of the Ex3"  , content: "This is the CONTENT of the Ex3"},
]);

</script>

<style scoped>
h2 {
  text-decoration: underline;
}
</style>