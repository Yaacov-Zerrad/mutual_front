<template>
  <div class="box is-shadowless menu has-background-white">
    <h1 class="subtitle">תפריט ראשי</h1>
    <aside class="menu">
  <p class="menu-label">
    קטגוריה
  </p>
  <ul class="menu-list">
    <li v-for="item in category" :key="item" >
      <!-- <router-link :to="item.get_absolute_url" @click="reloadCategory" >{{ item.name}}</router-link> -->
      <a :href="'/category'+item.get_absolute_url" >{{ item.name }}</a>
      <!-- <a :href="$router.resolve({name: 'category', params: {category_slug:item.get_absolute_url}}).href"> {{item.get_absolute_url}}</a> -->
      <!-- <a :href="$router.resolve({name: 'category', params: {category_slug:   item.get_absolute_url}}).href"> {{item.get_absolute_url}}</a> -->
    </li>
  </ul>
</aside>

  </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        category: Object
    },
    mounted(){

    },
    methods:{

      reloadCategory(){
        console.log('fount');
        // this.$refs.CategoryView.getService()
        this.$emit('')
      }
    }
}
</script>

<style>

</style>