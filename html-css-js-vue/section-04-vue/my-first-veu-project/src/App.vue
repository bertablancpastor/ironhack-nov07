<script setup>
import HelloWorld from './components/HelloWorld.vue';
import myFirstComponentVue from './components/vueBasics/myFirstComponent.vue';
import TextDirectionVue from './components/vueBasics/2-TextDirection.vue'
import ToDoItemVue from './components/vueBasics/ToDoItem.vue';
import AttribuiteBrindingVue from './components/vueBasics/4-attribuite-brinding.vue';
import ConditionalRendering from './components/vueBasics/5-ConditionalRendering.vue';
import EjerciciosConditionalRenderingVue from './components/vueBasics/EjerciciosConditionalRendering.vue';
import EjerciciosIteratingElementsVue from './components/vueBasics/EjerciciosIteratingElements.vue';
import EjercicioSlot from './components/vueBasics/EjercicoSlot.vue';
import EjercicioSlot1 from './components/vueBasics/EjercicioSlot1.vue';
import EjercicioForm from './components/vueBasics/EjercicioForm.vue';
import EjercicioWatches from './components/vueBasics/EjercicioWatches/EjercicioWatches.vue'
import EjercicioComponents from "./components/vueBasics/11-Events/ParentComponent.vue"
import General from './components/vueBasics/11-Events/General.vue';
</script>

<template>
<div>
  <header>
    
    <div class="wrapper">
      <HelloWorld msg="Vue"/>
    </div>
  </header>
  
  <main>
    <!-- <myFirstComponentVue/>
    <TextDirectionVue/>
    <ToDoItemVue/>
    <AttribuiteBrindingVue/>
    <ConditionalRendering/> -->
    <!-- <EjerciciosConditionalRenderingVue /> -->
    <!-- <EjerciciosIteratingElementsVue /> -->
    <!-- <EjercicioSlot />
    <EjercicioSlot1 /> -->
    <!-- <EjercicioForm /> -->
    <!-- <EjercicioWatches /> -->
    <!-- <ParentComponent /> -->
    <General />

  </main>
  
</div>
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
