<template>
<div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="/">Mario's Blog</a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <div v-if="!checkStatus">
      <a class="nav-link" href="#" data-toggle="modal" data-target="#myModal">Login</a>
        </div>
        <div v-else>
         <a class="nav-link" href="#" v-on:click="logout">Logout</a>

        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" v-on:click="moveToUpload">Upload</a>
      </li>
       
    </ul>
  </div>  
  
</nav>

 <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
            <div class="container">
              <h2>Login form</h2>
             
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="inputEmail">
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" v-model="inputPassword">
                </div>
                <div class="form-group form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember"> Remember me
                  </label>
                </div>
                <div class="row">
                  <div class="col">

                <button type="submit" class="btn btn-primary" data-dismiss="modal" v-on:click="login">Submit</button> <br>
                  </div>
                   <div class="col">

                 <router-link to="/register">Register</router-link>
                  </div>

                </div>
            
             
          </div>

        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

</div>

</template>


<script>
import router from '../router'
import {mapActions,mapState} from 'vuex'
export default {
    methods : {
      moveToRegis(){
        router.push('/register')
      },
      moveToUpload(){
        router.push('/upload')
      },
      ...mapActions([
        "login","logout"
      ])
    },
        computed :{
        ...mapState([
            'user','email','password','status'
        ]),
           inputName: {
                get () {
                    return this.$store.state.name
                },
                set (value) {
                    this.$store.commit('setName', value)
                }
            },
            inputEmail :{
                get(){
                    return this.$store.state.email
                },
                set(value){
                    this.$store.commit('setEmail',value)
                }
            },
            inputPassword : {
                get(){
                    return this.$store.state.password
                },
                set(value){
                    this.$store.commit('setPassword',value)
                }
            },
            checkStatus : {
                get(){
                    return this.$store.state.status
                },
                set(value){
                    this.$store.commit('setStatus',value)
                }
            }
    }
}
</script>
