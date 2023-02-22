<template>
  
  <div id="app fixed h-full" style="height:100%">
    <!-- <header /> -->
    <!-- <HomeGame /> -->
    <headerContact />
    
    <!-- <listContact /> -->
      
      <menuSidebar />
      <div style="min-height: 855px; margin-left:230px">
        <router-view></router-view> 
      </div>


    <footerContact />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TableSV from './components/TableSV.vue'
// import HomeGame from './components/userGame/home.vue'
import headerContact from './components/contacts/headerContact.vue'
import footerContact from './components/contacts/footerContact.vue'
import menuSidebar from './components/contacts/menuSidebar.vue'
// import listContact from './components/contacts/listContact.vue'




export default {
  name: 'App',
 
  
  components: {
    // HelloWorld,
    // TableSV,
    // HomeGame,
    headerContact,
    footerContact,
    menuSidebar,
    // listContact
    
  
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
