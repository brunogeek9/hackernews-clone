<template>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <!-- <a href="/" class="pure-menu-heading pure-menu-link">Hackernews </a> -->
      <router-link class="pure-menu-heading pure-menu-link" to="/">Hackernews</router-link>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link class="pure-menu-link" to="/last">Last Posts</router-link>
        </li>
        <li class="pure-menu-item" id="about">
          <router-link class="pure-menu-link" to="/about">About</router-link>
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
.container {
  font-weight: bold;
}
.pure-menu {
  /* background-color: #e17842; */
  background-color: black;

}
.pure-menu a:hover{
  color: black;
}
.pure-menu a {
  color: white;
}
/* #about {
  margin-right: 0%;
  margin-left: 100%;
} */
</style>