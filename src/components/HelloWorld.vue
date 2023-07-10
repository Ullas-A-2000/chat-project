<script setup>
import container from './container.vue';
import entertext from './entertext.vue'; 
import sidebar from './sidebar.vue';



defineProps({
  msg: String,
})


</script>

<template>
  <div class="navbar">
    <div class="contact"><p class="search">🔍</p><p class="name">sumaiya</p></div>

  </div>
  <container />
  <entertext />
  <sidebar  u="ullas" e="ullas@gmail.com" p="9353742131" bi="busy"/>
</template>

<style>
p{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.navbar{
  display: grid;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 18vh;
}

.contact{
  position: relative;
  left: 9.5%;
  text-align: center;
  border-radius: 30px;
  place-self: center;
  background-color: rgba(255, 255, 255, 0.32);
  width:78%;
  height:80%;
}
.name{
  font-weight: bold;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.6rem;
  padding-top: 2.5%;
}
.search{
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  top:10%;
  left:3%;
}
</style>
