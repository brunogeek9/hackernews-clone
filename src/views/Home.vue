<template>
  <div class="home">
    <h2>home</h2>
    <div v-for="story in stories" :key="story">
      {{ story.title }}
    </div>
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
      storiesIds:[],
      stories:[]
    }
  },
  computed:{
    
  },
  async created(){
    // https://hacker-news.firebaseio.com/v0/topstories.json
    try {
      let response1 = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      var data = response1.data;
      this.storiesIds = data.slice(0,11);

      this.storiesIds.forEach(id => {
        // try {
        //   let response2 = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        //   this.stories.push(response2);
        // } catch (error) {
        //   this.$log.error(error);
        // }
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response2)=>{
          this.stories.push(response2.data)
        })
        .catch((err)=>{
          this.$log.error(err);    
        });
            
          
      });
      this.$log.info('test','');
    } catch (error) {
      this.err = error;
    }
    

  }
}
</script>
