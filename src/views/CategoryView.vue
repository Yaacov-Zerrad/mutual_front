<template>
  <div class="page-category">
     <div class="box-article">
    <div class="columns is-multiline">      
      <Article class="column is-8 is-offset-2" v-for="item in category" :key="item.id" :item="item"  />
      <!-- <ArticleDetail/> -->
    </div>
  </div>


  </div>
</template>

<script>
import axios from 'axios'
import Article from '../components/Article.vue'
export default {
    name:'CategoryView',
    components:{
      Article,
    },
    data(){
      return{
        category: {},

      }
    },
    mounted(){
      this.getService()
    },
    methods:{
      getService(){
        let category_slug =  this.$route.params.category_slug
         axios.get(`api/service/category/${category_slug}/`)
         .then(response =>{
          this.category = response.data
         })
         .catch(error => console.log(error))
      }
    }
}
</script>

<style>

</style>