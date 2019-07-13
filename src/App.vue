<template>
  <div id="app">
    <navbar></navbar>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar'


export default {
  name: 'app',
  components: {
    // HelloWorld,
    Navbar
  }
}
</script>

<style>

</style>
