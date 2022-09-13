<template>
  <div class="page-home">
    <div class="columns">
      <div class="column">
        <h1 class="title">דף הבית</h1>
      </div>
    </div>
    <BoxArticle />
  </div>
</template>

<script>
import BoxArticle from '@/components/BoxArticle.vue'
export default {
  name: "Home",
  components: {
    BoxArticle,
  },
};
</script>

<style>
</style>