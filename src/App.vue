<template>
  
  <div id="app fixed h-full">
    <!-- <header /> -->
    <HomeGame />
    <router-view></router-view> 
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TableSV from './components/TableSV.vue'
import HomeGame from './components/userGame/home.vue'



export default {
  name: 'App',
 
  
  components: {
    // HelloWorld,
    // TableSV,
    HomeGame,
    
  
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
