<script setup>
import HelloWorld from './components/HelloWorld.vue';
import myFirstComponentVue from './components/vueBasics/myFirstComponent.vue';
import TextDirectionVue from './components/vueBasics/2-TextDirection.vue'
import ToDoItemVue from './components/vueBasics/ToDoItem.vue';
import AttribuiteBrindingVue from './components/vueBasics/4-attribuite-brinding.vue';
</script>

<template>

  <header>
    
    <div class="wrapper">
      <HelloWorld msg="My name is Berta Blanc"/>
    </div>
  </header>
  
  <main>
    <myFirstComponentVue/>
    <TextDirectionVue/>
    <ToDoItemVue/>
    <AttribuiteBrindingVue/>
  </main>


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
