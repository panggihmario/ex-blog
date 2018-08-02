<template>
   <div class="border border-dark">
         <h2>About Me</h2>
      
      <div class="fakeimg">
        <img src="../assets/luffy.jpg" height="200px" width="200px" class="img-thumbnail">
      </div>
      <div class="container">

      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h4>List Blog</h4>
    
      <ul class="nav nav-pills flex-column" v-for="(text,index) in allArticle" :key="index">
        <li class="nav-item">
          <!-- <a class="nav-link" href="#" @click="getOneArticle(index)">{{text.title}}</a> -->
          <router-link :to="{name :'article' ,params :{id :index}}"  @click.native="getOneArticle(index)">{{text.title}}</router-link>
        </li>
      </ul>
      <!-- <router-view></router-view> -->
      </div>
      <!-- <router-view/> -->
      <hr class="d-sm-none">
   </div>
</template>


 <style scoped>
  .fakeimg {
      height: 200px;
      background: white;
  }
  </style>

  <script>
  import {mapActions,mapState} from 'vuex'
  export default {
    methods : {
      ...mapActions([
        "getArticle","getOneArticle"
      ])
    },
    computed : {
      ...mapState([
        "articles","article"
      ]),
        allArticle : {
      get(){
        return this.$store.state.articles
      },
      set(){
        this.$store.commit('setArticles',value)
      }
    },
    
    
    },
    mounted(){
      this.getArticle()
    }
  
  }
  </script>
  