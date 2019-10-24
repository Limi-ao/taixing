<template>


  <div>
    <div v-if="type==='default'" class="login-box flex-column flex-center">
      <div class="login-icon">账号密码登录</div>
      <div class="flex">
        <div class="flex-center icon"><i class="iconfont icon-yonghuming"></i></div>
        <input type="text" placeholder="手机号" v-model="username">
      </div>
      <div class="flex">
        <div class="flex-center icon"><i class="iconfont icon-icon2"></i></div>
        <input type="password" placeholder="输入密码" v-model="password">
      </div>
      <button @click="defaultLogin">登录</button>
      <div class="flex-between forget">
          <span class="forgetPassword">
            <router-link to="/l-r/register"> 账号注册</router-link>
          </span>
        <span class="forgetPassword">忘记密码？</span>
      </div>
      <div class="circle">其他方式登录</div>
      <div class="flex other">
        <i @click="type='yanzhengma'" class="iconfont icon-yanzhengma"></i>
        <!-- <i @click="type='weixin'" class="iconfont icon-weixin"></i> -->
      </div>
    </div>
    <div v-if="type==='yanzhengma'" class="login-box flex-column flex-center">
      <div class="login-icon">验证码登录</div>
      <div class="flex">
        <div class="flex-center icon"><i class="iconfont icon-yonghuming"></i></div>
        <input type="text" placeholder="手机号" v-model="tel">
      </div>
      <div class="flex">
        <div class="flex-center icon"><i class="iconfont icon-securityCode-b"></i></div>
        <input type="text" style="width: 200px" v-model="verifycode" placeholder="输入验证码">
        <button style="width: 80px;margin-left: 20px;margin-bottom: 0" @click="getverifyCode">{{countWord}}</button>
      </div>
      <button @click="codeLogin">登录</button>
      <div class="flex-between forget">
          <span class="forgetPassword">
            <router-link to="/l-r/register"> 账号注册</router-link>
          </span>
        <span class="forgetPassword">忘记密码？</span>
      </div>
      <div class="circle">其他方式登录</div>
      <div class="flex other">
        <i @click="type='default'" class="iconfont icon-icon2"></i>
        <!-- <i @click="type='weixin'" class="iconfont icon-weixin"></i> -->
      </div>
    </div>
    <div v-if="type==='weixin'" class="login-box flex-column flex-center">
      <div class="login-icon">微信扫码登录</div>

      <div style="width: 340px;height: 190px">
        <img :src="code" style="width:160px;height:160px;display: block;margin: 0 auto" alt="">
      </div>
      <div class="circle">其他方式登录</div>
      <div class="flex other">
        <i @click="type='default'" class="iconfont icon-icon2"></i>
        <i @click="type='yanzhengma'" class="iconfont icon-yanzhengma"></i>
      </div>
    </div>
  </div>

</template>

<script>
  import CryptoJS from 'crypto-js'
  import bg from '../assets/img/login.jpg'
  import code from '../assets/img/code.png'
  export default {
    data() {
      return {
        code,
        bg,
        type: 'default',
        username: '',
        password: '',
        verifycode: '',
        tel: '',
        countWord : '发送验证码',
        totalTime : 60,
        canClick: true
      }
    },
    methods: {
      //3DES加密 Pkcs7填充方式
      encryptByDES(message, key){
        const keyHex = CryptoJS.enc.Utf8.parse(key);
        const encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, { 
        iv:CryptoJS.enc.Utf8.parse('01234567'), 
        mode: CryptoJS.mode.CBC, 
        padding: CryptoJS.pad.Pkcs7});
        return encrypted.toString();
      },
      defaultLogin(){
        if(this.username.trim().length===0){
          this.$message.error('手机号不能为空！')
          return
        }
        if(this.password.trim().length===0){
          this.$message.error('密码不能为空！')
          return
        }
        const _key = 'tyboot' + this.username.trim() + this.username.trim()
        const _password = this.password.trim()
        this.$post(this.$api.loginpw,{
            mobile:this.username,
            password:this.encryptByDES(_password,_key)
        }).then(res=>{
            console.log(res)
            if(res.code==0){
            localStorage.setItem('user', JSON.stringify(res.data));
            // localStorage.setItem('token', res.data.token);
            sessionStorage.setItem('token',res.data.token);
            localStorage.setItem('userId', res.data.userId);
            this.loginSuccess();
            }else{
              this.$message.error(res.msg)
            }
        })
      },
      codeLogin(){
        if(this.tel.trim().length===0){
          this.$message.error('手机号不能为空！')
          return
        }
        if(this.verifycode.trim().length===0){
          this.$message.error('验证码不能为空！')
          return
        }
        this.$post(this.$api.login,{
            mobile:this.tel,
            code:this.verifycode
        }).then(res=>{
            console.log(res)
            if(res.code==0){
            localStorage.setItem('user', JSON.stringify(res.data));
            // localStorage.setItem('token', res.data.token);
            sessionStorage.setItem('token',res.data.token);
            localStorage.setItem('userId', res.data.userId);
            this.loginSuccess();
            }else{
              this.$message.error(res.msg)
            }
        })
      },
      getverifyCode(){
        if (!this.canClick) return;
        this.canClick = false
        if(this.tel.trim().length===0){
          this.$message.error('请输入手机号！')
          return
        };
        if(this.tel.trim().length!==11){
          this.$message.error('手机号有误！')
          return
        };
        this.$post(this.$api.verification,{
          mobile:this.tel,
        }).then(res=>{
            console.log(res)
            if(res.code == 0){
              this.$message.success('发送成功！');
              this.countDown();
            }else{
              this.$message.error(res.data.msg);
            }
        })
      },
      loginSuccess(){
        this.$message.success('登录成功！')
        sessionStorage.setItem('login','1')
        setTimeout(()=>{
          this.$router.push('/')
        });
      },
      //定时器
      countDown() {
        let clock = window.setInterval(() => {
          this.totalTime--
          this.countWord = this.totalTime + '(s)';
          if (this.totalTime < 0) {//当倒计时小于0时清除定时器
            window.clearInterval(clock)
            this.countWord = '重新发送'
            this.totalTime = 60;
            this.canClick = true;
          }
        },1000)
      }
    },
    created() {
    }
  }
</script>

<style scoped>

  .login-box {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: 150px;
    width: 500px;
    height: 400px;
    background: rgba(255, 255, 255, 0.4);
  }

  input {
    border: 1px solid #eaeaea;
    width: 300px;
    height: 40px;
    background: #fff;
    border-left: none;

  }

  .icon {
    width: 40px;
    height: 40px;
    border: 1px solid #eaeaea;
    border-right: none;
    background: #fff;
  }

  .flex {
    margin-bottom: 20px;
  }

  .circle {
    /*width: 5px;*/
    /*height: 5px;*/
    height: 20px;
    font-size: 12px;
    width: 80px;
    line-height: 20px;
    /*border-radius: 50%;*/
    /*background: #fff;*/
    position: relative;
    color: #fff;
  }

  .circle:before {
    position: absolute;
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: linear-gradient(right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    left: -120px;
    top: 9px;
  }

  .circle:after {
    position: absolute;
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: linear-gradient(left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    right: -120px;
    top: 9px;
  }

  .login-icon {
    font-size: 30px;
    padding: 0px 0 30px;
    color: #3d4749;
  }

  button {
    width: 340px;
    height: 40px;
    border: none;
    background: #3d4749;
    color: #fff;
    margin-bottom: 10px;
  }

  .other .iconfont {
    font-size: 40px;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
  }

  .other .icon-yanzhengma, .other .icon-icon2 {
    color: #3d4749;
  }

  .other .icon-weixin {
    color: #8ee615;
  }

  .other .icon-icon2 {
    color: #eaeaea;
  }

  .forget {
    color: #fff;
    width: 340px;
  }

  .forgetPassword {
    cursor: pointer;
  }
</style>
