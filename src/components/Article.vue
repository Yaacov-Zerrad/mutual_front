<template>

    <div class="article-vue ">
        <!-- <div class="column is-3"> -->
            <div class="box has-background-light">
                <h1 class="subtitle is-size-2">{{ item.title }}</h1> 
                <div class="columns is-multiline">
                    <div class="column is-4 is-size-3">
                        <h2>{{ item.category }}</h2>
                    </div>
                    <div class="column is-4 has-text-centered">
                        <span><small>{{ item.date_add}}</small></span>
                    </div>
                    <div class="column is-4 has-text-left">
                        <span><small>{{item.position}}</small> </span>
                    </div>
                </div>
                <hr>
                <!-- <router-link class="button is-dark is-outlined" :to="item.get_absolute_url" >פרטים</router-link> -->
                
                <hr>
                <div class="description" v-if="detail">
                    <p class="p is-size-5">{{item.description}}</p>
                    <hr>
                    <button class="button has-text-primary-dark" @click="detail = ! detail"  >סגור</button>
                    <button class="button has-text-primary-dark" @click="detail = ! detail"  >לקחת</button>
                </div>
                <button class="button has-text-primary-dark" @click="detail = !detail"   v-else>פרטים</button>
               
            </div>
        <!-- </div> -->
    </div>
    </template>

<script>
import ArticleDetail from './ArticleDetail.vue';
export default {
    name: "Article",
    props: {
        item: Object,
    },
    data(){
        return{
            detail: false
        }
    },
    methods: {

    },
    components: { ArticleDetail }
}
</script>

<style>
</style>