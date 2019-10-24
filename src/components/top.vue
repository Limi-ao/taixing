<template >
    <div class="top" >
       <div class="container clearfix">
         <div class="fl">
           <router-link class="route" to="/home">钛鑫科技</router-link>
           <router-link class="route" to="/home">首页</router-link>
           <router-link v-if="login!=1" class="route" to="/l-r/login">登录</router-link>
           <span v-else>欢迎回来</span>
           <router-link v-if="login!=1" class="route" to="/l-r/register">注册</router-link>
         </div>
         <div class="fr" v-if="login==1">
           <!-- <router-link class="route" to="/info">个人信息</router-link> -->
           <span style="cursor: pointer" @click="loginOut">退出登录</span>
           <router-link  class="route" to="/myinformation">我的</router-link>
           <router-link  class="route" to="/myorder" style="margin-left:0">我的订单</router-link>
         </div>
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              route:'',
              login:''
            }
        },
      watch:{
        '$route.path'(v){
          this.route = v.substring(0,4)
          this.login = sessionStorage.getItem('login')
        }
      },
      methods:{
         loginOut(){
           sessionStorage.removeItem('login');
           localStorage.removeItem('user');
          //  localStorage.removeItem('token');
           sessionStorage.removeItem('token');
           localStorage.removeItem('userId');
           this.login = null
           this.$router.push('/l-r/login');
         }
      },
        created() {
          this.route = this.$route.path.substring(0,4)
          this.login = sessionStorage.getItem('login')
        }
    }
</script>

<style scoped>
.top{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #3d4749;
  line-height: 40px;
  color: #fff;
  z-index: 999;
}
  .route{
    margin-right: 20px;
  }
</style>
