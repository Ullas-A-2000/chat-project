<script setup>

// import container from './components/container.vue'
// import sidebar from './components/sidebar.vue'
// import enter from './components/entertext.vue'


</script>

<template>
  <!-- <nav>
      |
      <router-link to="/" style="color: white;"> Home</router-link> |
      <router-link to="/signup" style="color: white;">signin</router-link>
    </nav> -->

  <router-view/>
</template>

<style>
container{
  position: relative;
  left:50%;
}
nav{
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1rem;
}


</style>
