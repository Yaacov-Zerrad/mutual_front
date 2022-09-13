<template>
  <div class="page">
    <nav class="navbar has-background-primary-dark has-shadow has-addons has-text-primary-light">
      <div class="navbar-brand">
        <!-- <a href="#" class="navbar-item"></a> -->
        <router-link class="navbar-item" to="/">LOGO</router-link>

        <div class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"
          @click="showMobileMenu = !showMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" id="navMenu" :class="{ 'is-active': showMobileMenu }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">דף הבית</router-link>
          <router-link class="navbar-item" to="/about">צור קשר</router-link>

          <a href="#" class="navbar-item">צור קשר</a>
          <a href="#" class="navbar-item">דף הבית</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link"><router-link to="/my-account"  ><p has-text-white>חשבון שלי</p> </router-link></div>
            <div class="navbar-dropdown">
              <a href="#" class="navbar-item">הרשמה</a>
              <a href="#" class="navbar-item">כניסה</a>
              <a href="#" class="navbar-item">יציאה</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section has-background-light">
      <div class="columns">
        <div class="column is-3-tablet is-2-desktop is-1-widscreen">
          <nav class="menu" >

            <Menu :category="category" />
            
          </nav>
        </div>
        <div class="column">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="is-5"><strong>18</strong> בקשות לעזרה</p>
              </div>
              <div class="level-item">
                <div class="field has-addons">
                  <p class="control">
                    <input type="text" class="input" placeholder="קטגוריה, ..." />
                  </p>
                  <p class="control">
                    <button class="button">חיפוש</button>
                  </p>
                </div>
              </div>
            </div>
            <div class="level-rigth">
              <div class="level-item">סינון</div>
              <div class="level-item">
                <div class="select">
                  <select>
                    <option>בקשות לעזרה</option>
                    <option>הצעה לעזרה</option>
                    <option>אחרון</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <router-view />
        </div>
      </div>
    </section>
    <footer class="footer">


      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </div>
</template>
<script>
import axios from 'axios';
import Menu from './components/Menu.vue';

export default {
    data() {
        return {
            showMobileMenu: false,
            category : {}
        };
    },
    components: { 
      Menu 
    },
    mounted(){
      this.getCategory()
    },
    methods:{
      getCategory(){
        axios
        .get('/api/service/category/')
        .then(response => {
          this.category = response.data
        })
        .catch(error => console.log(error))

      }
    }

};
</script>
<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css";
// .page .flex-direction-row{
//     flex-direction: row;
// };
// .page .navbar-rtl{
//    margin-right: auto;
//    margin-left: 0;
//   background-color: red;

// }

</style>
