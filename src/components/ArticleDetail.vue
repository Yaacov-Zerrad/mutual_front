<template>

    <div class="article-vue">
        <!-- <div class="column is-3"> -->
            <div class="box has-background-light">
                <h1 class="subtitle">{{ item.title }} detail</h1> 
                <div class="columns is-multiline">
                    <div class="column is-6 ">
                        <h2>{{ item.category }}</h2>
                    </div>
                    <div class="column is-6">
                        <span><small>{{ item.date_add}}</small><small>{{item.position}}</small> </span>
                    </div>
                </div>
                <hr>
                <router-link class="button is-dark is-outlined" :to="item.get_absolute_url" >פרטים</router-link>
                
            </div>
        <!-- </div> -->
      
    </div>
    </template>

<script>
export default {
    name: 'Article',
    props:{ 
        item: Object,
    },
}
</script>

<style>
</style>