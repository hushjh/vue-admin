<!--  -->
<template>
  <div>
    <el-table :data='list' style='width:100%;padding-top:15px'>
      <el-table-column label='Order_No'  show-overflow-tooltip>
        <template slot-scope='scope'>
          {{scope.row.order_no}}
        </template>
      </el-table-column>
      <el-table-column label='Price'  width='195' align='center'>
        <template slot-scope='scope'>
          ￥{{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label='Status'  widht='100' align='center'>
        <template slot-scope='scope'>
          <el-tag :type='scope.row.status | statusFilter'>{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          order_no:"6967EDb6-E3A2-f952-fdec-EcEcF81A4c72",
          price:13945.7,
          status:"pending",
          timestamp:1222850150435,
          username:"Maria Garcia"
        },
        {
          order_no:"D7EA9b1c-bdf6-3286-e275-67Bcb90AEAFc",
          price:11630.4,
          status:"pending",
          timestamp:530516814719,
          username:"Patricia Rodriguez"
        },
        {
          order_no:"d75cFB60-1A52-72BF-cca1-54A286FC2dAD",
          price:7468,
          status:"success",
          timestamp:621602990773,
          username:"Scott Gonzalez"
        },
        {
          order_no:"9FfEC4eD-b6Db-bf4e-B7dB-9BC9A2F6fbCC",
          price:3082.7,
          status:"success",
          timestamp:539586522619,
          username:"Dorothy Hernandez"
        },
        {
          order_no:"bfeC5C2F-4dBc-202c-caEA-F88e9216c69C",
          price:11249.7,
          status:"pending",
          timestamp:106735260901,
          username:"Karen Jones"
        },
        {
          order_no:"4Cd645AE-DC16-dB3D-Afec-5d4C28B514C5",
          price:8256.67,
          status:"success",
          timestamp:1146794680447,
          username:"Larry Jones"
        },
        {
          order_no:"7EFc8Ea5-FEBe-04dc-d1F8-fF8E6D179523",
          price:5277,
          status:"pending",
          timestamp:1415973621560,
          username:"Scott Lewis"
        }
      ]
    };
  },
  filters:{
    statusFilter(value){
      if(value==='success'){
        return value
      }else{
        return 'danger'
      }
    }
  }
}

</script>
<style lang='css' scoped>
</style>