<template>
  <div class="home">
    <h2>Homepage</h2>
    <div v-for="story in stories" :key="story">
      <h2>{{ story.title }}</h2>
      <p>{{ story.url }}</p>
      <p>Coments: {{ story.descendants }}</p>
      <p>Score: {{story.score}}</p>
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
  methods:{
    async gatAllNews(){
      let response1 = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      var data = response1.data;
      this.storiesIds = data.slice(0,11);
    }
  },
  async created(){
    // https://hacker-news.firebaseio.com/v0/topstories.json
    try {
      // getting all ids
      let response1 = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      var data = response1.data;
      this.storiesIds = data.slice(0,11);
      // this.gatAllNews();
      // getting all news
      this.storiesIds.forEach(id => {
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
