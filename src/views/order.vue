<template>
  <div>
    <h2 class="border-bottom" style="margin-bottom: 60px">订单信息</h2>
    <div>
      <div class="flex nav">
        <div>订单号</div>
        <div>商品名称</div>
        <div>金额</div>
        <div>下单时间</div>
        <div>交易状态</div>
      </div>
      <div class="flex nav nav1">
        <div>201902151110</div>
        <div>钛鑫科技大数据解决方案</div>
        <div>&yen;0.01</div>
        <div>201902151110</div>
        <div>交易成功</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {},

    created() {
    }
  }
</script>

<style scoped>
  .nav div {
    width: 180px;
    padding: 20px 0;
    text-align: left;
    color: #333;
    font-size: 16px;
  }

  .nav1 div {
    width: 180px;
    color: #666;
    font-size: 14px;
  }

  .border-bottom {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 20px;
  }
</style>
