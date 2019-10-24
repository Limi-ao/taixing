<template>
  <div>
    <h2 class="border-bottom">基本信息</h2>
    <div class="flex border-bottom">
      <img id="head"
           src="data:image/jpeg;base64,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"
           alt="">
      <div class="flex-left" style="margin-left: 20px;">
        <h4>登录账号：12313414 <span v-if="!hasId">(未实名认证 <span style="color: brown;cursor: pointer">去认证</span>)</span><span
          v-else>（已认证）</span>
        </h4>
        <div>账号ID：1231313131</div>
        <div>注册时间：2019-09-12</div>
      </div>

    </div>
    <div class="flex border-bottom">
      <div>您当前的账号安全程度</div>
      <div class="progress">
        <div class="progress-d" :style="{width:getGrogress}"></div>
      </div>
      <div>安全级别：<span style="color: brown">{{getLength>1?getLength>4?'高':'中':'低'}}</span></div>
    </div>
    <div>
      <div class="flex-between border-bottom border-dashed" v-for="item,index in info" :key="index">
        <div class="flex">
          <div class="title">{{item.name}}</div>
          <div>{{item.text}}</div>
        </div>
        <div class="flex">
          <div v-if="item.has" class="flex-center">
            <i class="el-icon-success" style="color: green"></i>
            <div class="has-set" style="color: green">已设置</div>
            <div class="set" @click="setInfo(index)">去修改</div>
          </div>

          <div v-else class="flex-center">
            <i class="el-icon-warning" style="color: brown"></i>
            <div class="has-set" style="color: brown">未设置</div>
            <div class="set" @click="setInfo(index)">去设置</div>
          </div>

        </div>
      </div>
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
        newPassword1: '',
        hasId: false,
        info: [
          {text: '安全性高的密码可以使账号更安全。建议定期更换密码。6-12位包含字母、数字。', has: true, hasSet: true,hasReset:true, name: '登录密码'},
          {text: '您已绑定邮箱[1111@ty.com]，将接收钛鑫科技发送的信息。', has: true, hasSet: true,hasReset:false, name: '邮箱绑定'},
          {text: '请绑定手机用于登录，修改密码。', has: false, hasSet: true,hasReset:false, name: '手机绑定'},
          {text: '建议设置三个容易记住的密保问题，保障账号安全。', has: false, hasSet: false,hasReset:false, name: '密保问题'},
          {text: '是否开启手机验证码保护，登录时将发送验证码到您的手机再次验证',has:false, hasSet: false,hasReset:false, name: '操作保护'},
        ],
        // length:0,
      }
    },
    methods:{
      setInfo(index){
        let item = this.info[index]
        if(!item.has){
          if(item.hasSet){
            if(item.name=='邮箱绑定'){
              this.email = true
            }
            if(item.name=='手机绑定'){
              this.phone = true
            }
          }else {
            this.$message.info('功能正在开发中！')
            return;
          }
        }else {
          if(!item.hasReset){
            this.$message.info('重置功能正在开发中！')
            return;
          }
        }

        if(index==0){
          this.$router.push('/info/password')
        }
      },
      confirm() {
        if(this.phone){
          this.info[2].has = true
          this.info[2].text = '您已绑定手机[18888888888]用于登录、修改密码'
          this.phone = false
        }
        if(this.email){
          this.info[1].has = true
          this.info[1].text = '您已绑定邮箱[1111@ty.com]，将接收钛鑫科技发送的信息'
          this.phone = false
        }

        this.$message.success('修改成功')
      },
    },
    computed: {
      getLength() {
        let count = 0
        for (let i in this.info) {
          if (this.info[i].has === true) {
            count++
          }
        }

        return count
      },
      getGrogress() {
        console.log(this.getLength / 5 * 200 + 'px')
        return this.getLength / 5 * 200 + 'px'
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .border-bottom {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 20px;
  }

  .border-dashed {
    border-bottom: 1px dashed #eaeaea;
    /*height: 30px;*/
    /*line-height: 30px;*/
  }

  .border-dashed div {
    height: 30px;
    line-height: 30px;
  }

  h4 {
    font-size: 20px;

  }

  h4 span {
    font-size: 14px;
    font-weight: normal;
  }

  .flex-left div {
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    padding: 20px 0;
  }

  .progress {
    /*box-sizing: border-box;*/
    margin: 0 20px;
    width: 200px;
    height: 20px;
    /*border-radius: 4px;*/
    background: rgba(0, 0, 0, 0.05);
    position: relative;
  }

  .progress-d {
    position: absolute;
    background: navajowhite;
    left: 0;
    top: 0px;
    height: 20px;
  }

  .title {
    font-size: 16px;
    color: #333;
    margin-right: 20px;
  }
  .has-set{
    margin: 0 20px 0 0;

  }
  .set{
    color: blue;
    cursor: pointer;
  }
</style>
