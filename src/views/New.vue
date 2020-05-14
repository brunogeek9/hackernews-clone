<template>
  <div>
    <h2>Last Posts</h2>
    <item v-for="story in stories" :key="story.id" :story="story"></item>
  </div>
</template>

<script>
import axios from "axios";
import Item from "../components/Item";

export default {
  name: "new",
  components: {
    'item': Item
  },
  data() {
    return {
      err: "",
      storiesIds: [],
      stories: []
    };
  },
  computed: {},
  methods: {},
  async created() {
    try {
      // getting all ids
      let response1 = await axios.get(
        "https://hacker-news.firebaseio.com/v0/newstories.json"
      );
      var data = response1.data;
      this.storiesIds = data.slice(0, 11);
      // getting all news
      this.storiesIds.forEach(id => {
        axios
          .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(response2 => {
            this.stories.push(response2.data);
          })
          .catch(err => {
            this.$log.error(err);
          });
      });

      this.$log.info("test", "");
    } catch (error) {
      this.err = error;
    }
  }
};
</script>
