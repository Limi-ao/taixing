<template>
  <div class="container"  style="padding-top: 40px">
    <div class="container_second clearfix">

        <div class="infobox  clearfix">
            <div class="image imagetext">头像</div>
            <div class="image"><img :src="info.headimgurl" class="headerimage"></div>
        </div>
        
         <div class="username clearfix">
            <div class="image usertext">用户名</div>
            <div class="nametext">{{info.userName}}</div>
        </div>

        <div class="username clearfix" style="margin-top:20px">
            <div class="image usertext">性别</div>
            <div class="nametext">{{info.sex}}</div>
        </div>

        <div class="username clearfix"  style="margin-top:20px">
            <div class="image usertext">电话</div>
            <div class="nametext">{{info.mobile}}</div>
        </div>

         <div class="username clearfix"  style="margin-top:20px">
            <div class="image usertext">余额</div>
            <div class="nametext">{{info.balance}}元</div>
        </div>

        <!-- <div class="username clearfix"  style="margin-top:50px">
            <div class="image usertext" style="margin-left:0">我的订单</div>
        </div> -->
        
        <!-- <div class="username clearfix"  style="margin-top:10px">
            <ul>
                <template v-for="item in demoOrders">
                    <li>订单编号:{{ item.orderId }}</li>
                    <li>购买数量:{{ item.num }}</li>
                    <li>下单时间:{{ item.createTime }}</li>
                    <li>商品id:{{ item.goodsId }}</li>
                    <hr/>
               </template>
           </ul>
        </div> -->
       
     
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       info:{},
       demoOrders:[]
      }
    },
    methods: {

    },
    created() {
      let userId =  localStorage.getItem('userId');
       this.$get(this.$api.myinfor,{
           userId:userId
       }).then(res=>{
           if(res.code==0){
             this.info = res.data.user
             this.demoOrders = res.data.demoOrders
           }
       })
    },
    mounted(){
     
   }
   
  }
</script>

<style scoped>
.container_second{
    width:50%;
    margin:0px auto;
    /* background:#fc3; */
}
.headerimage{
    width:100px;
    height:100px;
    border-radius:50px;
}
.publicstyle{
    float:left
}
.infobox{
    height:180px;
}
.image{
    float:left;
    font-size:20px;
}
.imagetext{
    line-height:180px;
    margin-left:20px;
}
.infobox div img{
    margin-top:40px;
    margin-left:120px;
}


.username{
    /* background:#333; */
    height:40px;
}
.usertext{
    margin-left:20px;
    line-height:40px;
}
.nametext{
    margin-left:180px;
    line-height:40px;
    font-size:20px;
}

.username ul li {
    margin:0 0 10px 0;
}


</style>
