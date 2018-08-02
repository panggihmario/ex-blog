import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/fb.js'
import swal from 'sweetalert';
import router from './router'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name :'',
    email : '',
    password : '',
    title : '',
    body : '',
    articles : {},
    article : {},
    comment : '',
    allComment : [],
    indexArticle : '',
    status : false
  },
  mutations: {
    setStatus(state,payload){
      state.status = payload
    },
    setIndexArticle(state,payload){
      state.indexArticle = payload
    },
    setAllComment(state,payload){
      state.allComment = payload
    },
    setComment(state,payload){
      state.comment = payload
    },
    setArticle(state,payload){
      state.article = payload
    },
    setArticles(state,payload){
      state.articles = payload
    },
    setBody(state,payload){
      state.body = payload
    },
    setTitle(state,payload){
      state.title = payload
    },
    setName(state,payload){
      state.name = payload
    },
    setEmail(state,payload){
      state.email = payload
    },
    setPassword(state,payload){
      state.password = payload
    }
  },
  actions: {
    addUser(context){

      let self = this
      db.ref('users').push({
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
      },function(err){
        if(err){
          console.log('gagal',err)
        }else{
          // console.log(self.state.name)
          localStorage.setItem('username',self.state.name)
          localStorage.setItem('email',self.state.email)
          router.push('/about')
          // console.log(self.state.status)
          self.state.status = true
        }
      })
    },
    upload(context){
      // let self = this
      var admin = localStorage.getItem('email')
      if(admin == "panggih@mail.com"){
        db.ref('article').push({
          title : this.state.title,
          body : this.state.body
        },function(err){
          if(err){
  
            console.log(err,'failure')
          }else{
            console.log('success')
          }
        })
        router.push('/about')
        this.state.title =''
        this.state.body = ''
      }else{
        swal("Wrong!", "you can't post a blog", "error");
      }

    },
    getArticle(context){
      let self = this
      db.ref('article').on('value',(snapshot)=>{
        var data = snapshot.val()
        // console.log(data)
        self.state.articles = data
        // console.log(self.state.articles)

      })
    },
    addComment(context){
      console.log(this.state.indexArticle)
      var user = localStorage.getItem('username')
      if(user){
        db.ref(`article/${this.state.indexArticle}`).push({
          comment : this.state.comment,
          name : user
        },function(err){
          if(err){
            console.log(err)
          }else{
            console.log('success')
          }
        })
        this.state.comment =''
      }else{
        swal("Wrong!", "please login", "error");
      }
    
    },
    getComment(context){
      var data = this.state.article
      console.log(data)
      for(let i=0;i<data.length;i++){
        this.state.allComment.push(data[i].comment)
      }
     
      // db.ref(`article/${this.state.indexArticle}`).on('value',(snapshot)=>{
      //   var data = snapshot.val()
      //       console.log(data)
      //   })
    },
    getOneArticle(context,index){
      // console.log(index)
      let self = this
      localStorage.setItem('index',index)
      db.ref(`article/${index}`).on('value',(snapshot)=>{
        var data = snapshot.val()
        // console.log(data)
        context.commit('setArticle',data)
        this.state.article = data
        this.state.indexArticle = index
        // console.log(data)
      })
    },
    login(context){
      console.log('tes')
      var self = this
      db.ref('users').on('value',(snapshot)=>{
        var data = snapshot.val()
        console.log(this.state.email)
        var check = false
        for(var i in data){
          if(data[i].email == this.state.email && data[i].password == this.state.password){
            check = true
            localStorage.setItem('username',data[i].name)
            localStorage.setItem('email',data[i].email)
            self.state.status = true
            console.log(self.state.status)
          }
        }
        if(!check){
          swal("Wrong!", "Incorrect username/password!", "error");

        }
      })
    },
    logout(context){
      let self = this
      localStorage.clear()
      self.state.status = false
    }
  }
})
