<template>
  <div class="home">
    <h2>home</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import axios from 'axios'

export default {
  name: 'home',
  data(){
    return {
      err:'',
      stories:[

      ]
    }
  },
  async created(){
    // https://hacker-news.firebaseio.com/v0/topstories.json
    try {
      let request = axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      this.stories = request.data;
    } catch (error) {
      this.err = error;
    }
    

  }
}
</script>
