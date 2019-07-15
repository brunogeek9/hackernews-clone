<template>
    <div class="container">
        <h2>{{story.title}}</h2>
        <p>Score: {{story.score}}</p>
        <p>
            original source 
            <a :href="story.url">Link: {{story.url}}</a>
        </p>
        <br>
        <hr>
        <div class="coments" v-for="coment in coments" :key="coment.id">
            <div class="coment-wrap">
                <p>{{ coment.text }}</p>
                <p>{{ coment.by }}</p>
                <p>{{ coment.time }}</p>                
            </div>
            <hr>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'article',
    data(){
        return{
            story: {},
            err: '',
            coments: []
        }
    },
    async created(){
        
        try {
            let res1 = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.$route.params.id}.json`);
            this.story = res1.data;
            this.story.coments = [];   
            this.story.kids.forEach(id => {
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then((res2)=>{
                    this.coments.push(res2.data);
                })
            }); 
        } catch (error) {
            this.err = error;
        }
    }
}
</script>
<style>

</style>
