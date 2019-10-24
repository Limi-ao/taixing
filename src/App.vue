<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <top></top>
    <router-view/>
  </div>
</template>

<script>
  import top from '@/components/top.vue'
export default {
  name: 'App',
  components:{
    top
  },
  methods:{
    promise(){
      return new Promise((resolve,reject)=>{
        reject('error')
      })
    }
  },
  created(){
    this.promise().then((v)=>{
      console.log(v)
    }).catch((v)=>{console.log(v)})
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  font-size: 14px;
  position: relative;
  height: 100%;
}
</style>
