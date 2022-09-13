<template>
  <div class="box-article">
    <div class="columns is-multiline">      
      <Article class="column is-8 is-offset-2" v-for="item in items" :key="item.id" :item="item"  />
      <!-- <ArticleDetail/> -->
    </div>
  </div>
</template>

<script>
import Article from './Article.vue';
import axios from 'axios'


export default {
    name: "BoxArticle",
    components: { 
      Article, 

    },
    data(){
      return {
        items: [],
        detail: false,
        detail_item : {},
      }
    },
    mounted(){
      // this.items = this.$store.state.items
      this.getLatestService()

    },
    methods:{
      async getLatestService() {
        await axios
        .get('/api/service/latest-service/')
        .then(response => {
          this.items = response.data
        })
        .catch(error => {
          console.log(error)
        })
      }

    }
}
</script>

<style>

</style>