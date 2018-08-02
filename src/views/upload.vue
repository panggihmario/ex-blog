<template>

    <div>
        <navbar/>
    <div class="container">
  <h2>Upload Your Blog</h2>

   <div class="row">
  <div class="col-sm-4">
         <div class="form-group">
      <label for="name">Title:</label>
      <input type="text" class="form-control"  placeholder="Enter title" v-model="inputTitle">
    </div>
  </div>
  
</div> 
   
    <div class="form-group">
      <label for="comment">Comment:</label>
      <!-- <textarea class="form-control" rows="5" id="comment" name="text" v-model="inputBody"></textarea> -->
      <wysiwyg v-model="inputBody" />
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm4">

    <button type="submit" class="btn btn-primary" @click="upload">Submit</button>
            </div>
       
        </div>
    
    </div>
 
</div>

    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import navbar from '@/components/navbar.vue'
export default {
    components :{
        navbar
    },
    methods : {
        ...mapActions([
            "upload"
        ])
    },
        computed :{
        ...mapState([
            'title','body'
        ]),
           inputTitle: {
                get () {
                    return this.$store.state.title
                },
                set (value) {
                    this.$store.commit('setTitle', value)
                }
            },
            inputBody :{
                get(){
                    return this.$store.state.body
                },
                set(value){
                    this.$store.commit('setBody',value)
                }
            },
          
    }
}
</script>
