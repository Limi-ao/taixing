<template>
  <div class="">
    <h3>选择方式</h3>
    <div class="flex box">
      <div @click="email=true">邮箱验证码</div>
      <div @click="phone=true">手机验证码</div>
    </div>
    <el-dialog
      title="邮箱验证码"
      :visible.sync="email"
      width="500px"
    >
      <div style="margin-bottom: 20px">邮箱：
        <el-input placeholder="请输入内容" v-model="emailV">
          <el-button slot="append">发送验证码</el-button>
        </el-input>
      </div>
      <div>验证码：
        <el-input v-model="emailC" placeholder="请输入验证码"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="email = false">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="手机验证码"
      :visible.sync="phone"
      width="500px"
    >
      <div style="margin-bottom: 20px">手机号：
        <el-input placeholder="请输入内容" v-model="phoneV">
          <el-button slot="append">发送验证码</el-button>
        </el-input>
      </div>
      <div>验证码：
        <el-input v-model="phoneC" placeholder="请输入验证码"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="phone = false">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="重置密码"
      :visible.sync="setPassword"
      width="500px"
    >
      <div style="margin-bottom: 30px">
        <el-input v-model="newPassword" placeholder="请输入密码"></el-input>
      </div>
      <div>
        <el-input v-model="newPassword1" placeholder="请再次输入密码"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="setPassword = false">取 消</el-button>
    <el-button type="primary" @click="finish">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: false,
        emailV: '',
        emailC: '',
        phone: false,
        phoneV: '',
        phoneC: '',
        setPassword: false,
        newPassword: '',
        newPassword1: ''
      }
    },
    methods: {
      confirm() {
        this.email = false
        this.phone = false
        this.setPassword = true
      },
      finish(){
        if(this.newPassword.length>0&&this.newPassword===this.newPassword1){
          this.setPassword = false
          this.$message.success('修改成功,请重新登录')
          this.$router.push('/l-r/login')
        }else {
          this.$message.success('2次密码不一致')
        }

      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .box {
    width: 600px;
    height: 200px;
  }

  .box > div {
    width: 200px;
    margin-right: 30px;
    margin-top: 30px;
    height: 80px;
    border: 1px solid #eaeaea;
    text-align: center;
    line-height: 80px;
    background: #3d4749;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
  }
</style>
