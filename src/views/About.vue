<template>
<div>
    <div class="jumbotron text-center" style="margin-bottom:0">
  <h1>Welcome to my Blog</h1>
 
</div>

<navbar/>
   <div class="container" style="margin-top:50px">
  <div class="row">
    <div class="col-sm-4">
        <sidebar/>
    </div>
    <div class="col-sm-8" style="margin-top:-15px">
      <mainbar/>
    </div>
  </div>
</div>


   <div class="jumbotron text-center" style="margin-bottom:0">
  <p>Footaer</p>
   </div>

</div>
</template>


<script>
import navbar from '@/components/navbar.vue'
import sidebar from '@/components/sidebar.vue'
import mainbar from '@/components/mainbar.vue'
import footer from '@/components/footer.vue'

export default {
  components :{
    navbar,sidebar,mainbar,footer
  },
 
  
}
</script>


 <style>
  .fakeimg {
      height: 200px;
      background: #aaa;
  }
  </style>