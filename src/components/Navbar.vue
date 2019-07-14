<template>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <!-- <a href="/" class="pure-menu-heading pure-menu-link">Hackernews </a> -->
      <router-link class="pure-menu-heading pure-menu-link" to='/'>Hackernews</router-link>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <!-- <a href="/" class="pure-menu-link">Upload</a> -->
          <router-link class="pure-menu-link" to='/single'>Single component</router-link>
        </li>
        <li class="pure-menu-item">
          <!-- <a href="#" class="pure-menu-link">Sports</a> -->
        </li>
        <li class="pure-menu-item">
          <!-- <a href="#" class="pure-menu-link">Finance</a> -->
        </li>
        <li class="pure-menu-item" id="sobre">
          <router-link class="pure-menu-link" to='/about'>About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  };
</script>

<style scoped>
  .container{
    font-weight: bold;
  }
  .pure-menu {
    background-color: #e17842;
  }
  .pure-menu a {
    color: white;
  }
  #sobre{
    float: right;
    margin-right: 0;
  }
</style>