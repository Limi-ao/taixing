<template>
  <div class="container"  style="padding-top: 40px">
<el-table
  :data="datalist"
  stripe
  border style="margin-bottom:14px;"
>
  <el-table-column property="goodsId" label="商品id" align="center"  type="index" :index="indexMethod" ></el-table-column>
  <el-table-column property="orderId" label="订单编号"  align="center" ></el-table-column>
  <el-table-column property="num" label="购买数量" align="center"  ></el-table-column>
  <el-table-column property="createTime" label="下单时间" align="center" ></el-table-column>
</el-table>
    <div class="paginationClass">
        <el-pagination
         @size-change="handleSizeChange"
        @current-change ="handleCurrentChange"
        :current-page="pagelist.current"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pagelist.size"
        layout="total, sizes, prev, pager, next,jumper"
        :total="pagelist.total">
        </el-pagination>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
       datalist:[],//列表数据
       //列表前端分页
       pagelist:{
        // total: '',
        // size: '',
        // pages: '',
        // current: ''
       },
       pageparams:{
           page:1,
           pageSize:10
       }
      }
    },
    methods: {
      indexMethod(index) {
　　     return (this.pagelist.current - 1) * this.pagelist.size + index + 1
     },
    handleSizeChange(val) {
　　this.pagelist.size = val
　　this.pageparams.pageSize = this.pagelist.size
　　this.pageparams.page = this.pagelist.current
　　this.loadTable();
  },
  handleCurrentChange (currentPage) {
　　this.pagelist.current = currentPage
　　this.pageparams.page = this.pagelist.current
　　this.loadTable();
  },
  loadTable(){
      this.$get(this.$api.myorder,{
           ...this.pageparams
    }).then(res=>{
        if(res.code==0){
            this.datalist = res.data.list;
            this.pagelist = res.data.page;
     }
    })
  }
 },
  created() {
    this.$get(this.$api.myorder,{
           ...this.pageparams
    }).then(res=>{
        if(res.code==0){
            this.datalist = res.data.list;
            this.pagelist = res.data.page;
     }
    })
  },

}
</script>

<style scoped>
   .paginationClass{
       text-align: right;
   }
</style>
