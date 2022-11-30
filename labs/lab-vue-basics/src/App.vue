<script setup>
import HelloWorld from './components/HelloWorld.vue'
import iteration1 from './components/iteration1.vue';
import Footer from './components/Footer.vue';
import iteration2 from './components/iteration2.vue';
import iteration3 from './components/iteration3.vue';
import iteration4 from './components/iteration4.vue';
import iteration5 from './components/iteration5.vue';



</script>

<template>
  <header>
      <div class="wrapper">
      <HelloWorld msg="Vue Basics" />
    </div>
  </header>

  <main>
    <HelloWorld />
    <iteration1 />
    <Footer />
    <iteration2 />
    <iteration3 />
    <iteration4 />
    <iteration5 />
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
