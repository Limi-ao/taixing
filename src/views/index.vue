<template>
  <div class="container" style="padding-top: 40px">
    <div class="order">
      <img :src="s1" alt="">
      <div class="programme">
        <h3>钛鑫科技大数据解决方案</h3>
        <p >通过多位交叉分析及智能算法，构建智能，高效的大数据平台</p>

        <div>
        <span class="pricetop" >单价：&yen;&nbsp;0.01</span>
        <span class="pricecount pricetop">&nbsp;&nbsp;&nbsp;&nbsp;数量&nbsp;</span><el-input-number v-model="num1" :min="1" size="mini"  label="数量"></el-input-number>
        </div>

        <mBtn class="btn" @click.native="totalprice()">订购</mBtn>
      </div>

    </div>
    <div class="order">
      <img :src="s2" alt="">
      <div class="programme" style="background:rgba(0,0,0,0.3)">
        <h3>钛鑫科技金融解决方案</h3>
        <p >为金融行业客户量身定制合规安全、低成本、高性能、高可用的云服务。运用领先技术助力客户科技升级，打造云上金融，智创未来。</p>
        <p class="price">价格：&nbsp;0.01</p>
        <mBtn class="btn" @click.native="buyP('钛鑫科技金融解决方案')">订购</mBtn>
      </div>
    </div>

    <el-dialog
      title="确认订购？"
      :visible.sync="countprice"
      width="500px"
    >
      <div class="flex-between">
        <div class="price">单价:0.01</div>
        <div class="price">数量:{{num1}}</div>
        <div class="price">总价:&yen;{{0.01*num1}}</div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="countprice = false">取 消</el-button>
    <el-button type="primary"  @click="order">确 定</el-button>
  </span>
  </el-dialog>

    <el-dialog
      title="确认订购？"
      :visible.sync="buy"
      width="500px"
    >
      <div class="flex-between">
        <div>{{text}}</div>
        <div class="price">&yen;0.01</div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="buy = false">取 消</el-button>
    <el-button type="primary" @click="finish">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import s1 from '../assets/img/bigData.jpeg'
  import s2 from '../assets/img/sss.jpg'

  export default {
    data() {
      return {
        s1,
        s2,
        buy: false,
        countprice:false,
        text: '',
        num1:1
      }
    },
    methods: {
      totalprice(text){
        let isLogin = sessionStorage.getItem('login')
        if (isLogin == '1') {
          this.countprice = true
          this.text = text
        } else {
          this.$message.info('请先登录')
          this.$router.push('/l-r/login')
        }
      },

     //下单
     order(){
       let isLogin = sessionStorage.getItem('login');
       let userId = localStorage.getItem('userId');
        if (isLogin == '1') {
          this.$post(this.$api.order,{
            userId:userId,
            goodsId:1,
            goodsPrice:0.01,
            num:this.num1
          }).then(res => {
             if(res.code==0){
               this.countprice = false;
               this.$message.success(res.msg);
             }else{
               this.countprice = false;
                this.$message.error(res.msg);
             }

          })
        } else {
          this.$message.info('请先登录')
          this.$router.push('/l-r/login')
        }
     },



      buyP(text) {
        let isLogin = sessionStorage.getItem('login')
        if (isLogin == '1') {


          this.buy = true
          this.text = text
        } else {
          this.$message.info('请先登录')
          this.$router.push('/l-r/login')
        }
      },
      finish() {
        this.buy = false
        this.$message.success('订购成功')
      }
    },
    created() {
    },
    beforeRouteEnter(to, from, next){
     let isLogin =  sessionStorage.getItem('login')
      if(isLogin == '1'){
       next()
      }else {

        next(vm=>{
          vm.$message.info('请先登录')
          vm.$router.push('/l-r/login')
        })
      }
    }
   
  }
</script>

<style scoped>
  .order {
    position: relative;
    padding: 20px 0;
    width: 1200px;
    height: 440px;
  }

  .order img {
    width: 1200px;
    height: 400px;
    border-radius: 10px;
  }

  .programme {
    width: 500px;
    height: 200px;
    text-align: center;
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    margin-top: -100px;
    color: #fff;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    padding: 20px 0;
  }


  .programme h3 {
    font-size: 40px;
  }

  .btn {
    margin-top: 20px;
  }

  p {
    text-align: left;
    padding: 0 30px;
    font-size: 14px;
    color: #fff;
  }
  .pricetop{
    font-size: 20px;
    margin-top: 15px;
    text-align: left;
  }

  .price{
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
  }
</style>
