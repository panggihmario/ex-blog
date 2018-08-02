<template>
    <div>
<!-- {{oneArticle}} -->
   <div class="container mt-3 border border-dark">
    <div >
 
        <h2>{{oneArticle.title}}</h2>

      <div class="fakeimg">
          <img src="https://fudoushin.files.wordpress.com/2008/07/img_4490.jpg?resize=960%2C720" height="200px" width="400px">
      </div>
      <p>.</p>
      <p v-html="oneArticle.body"></p>
    
 
      <label for="comment">Comment:</label>
      <textarea class="form-control" rows="0" id="comment" name="text" v-model="inputComment" ></textarea>
      <div class="container mt-3">

      <button type="button" class="btn btn-primary" @click="addComment()">Submit</button>
      </div>
      <br>
      <div  v-for="(art,index) in oneArticle" :key="index">
      <div class="media border p-3 border border-dark " v-show="art.comment">
    
   


    <div class="media-body">
      <h4>{{art.name}} <small>
        <i>Posted on </i></small></h4>
      <p>{{art.comment}}</p>      
    </div>
    
 
    </div>




      </div>
  

 





  </div>
</div>
 <div >
   
        </div>

    </div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
      return{
        allComment :[],
        username :''
      }
    },
     methods : {
    ...mapActions([
      "getArticle","addComment","getComment","getOneArticle"
    ]),
    pushComment(){
      this.allComment =[]
      for(var i in this.state.article){
        this.allComment.push(i)
      }
   
    },
    getUser(){
      var user= localStorage.getItem('username')
      this.username = user
    }
  },
  computed : {
    ...mapState([
      "article","comment"
    ]),
    oneArticle : {
      get(){
        // let data = this.$store.state.article
        // for(var i in data){
        //   this.allComment.push(data)
        // }
        return this.$store.state.article
      },
      set(){
        this.$store.commit('setArticle',value)
      }
    },
    inputComment : {
        get(){
            return this.$store.state.comment
        },
        set(value){
            this.$store.commit('setComment',value)
        }
    },
  },
  mounted(){
    this.getOneArticle()
    // this.pushComment()
    this.getComment()
  }
}
</script>

<style scoped>
  .fakeimg {
      height: 200px;
      background: white;
  }
  </style>

