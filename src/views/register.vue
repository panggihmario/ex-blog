<template>
   <div class="container">
  <h2>Register</h2>

     <div class="form-group">
      <label for="name">Username:</label>
      <input type="text" class="form-control"  placeholder="Enter username"  v-model="inputName">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control"  placeholder="Enter email" name="email" v-model="inputEmail">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control"  placeholder="Enter password" name="pswd" v-model="inputPassword">
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="addUser">Submit</button>
  
</div>

</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    methods : {
        ...mapActions([
            "addUser"
        ])
    },
        computed :{
        ...mapState([
            'user','email','password'
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
            }
    }
}
</script>
