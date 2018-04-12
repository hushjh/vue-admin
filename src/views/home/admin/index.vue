<!--  -->
<template>
  <div class='home-editor-container'>
    <github-corner></github-corner>
    <panel-group></panel-group>
    <el-row class='chart-wrapper'>
      <line-charts :chart-data='lineChartData'></line-charts>
    </el-row>
    <el-row :gutter='32'>
      <el-col :xs='24' :sm='24' :lg='8'>
        <div class="chart-wrapper">
          <raddar-chart></raddar-chart>
        </div>
      </el-col>
      <el-col :xs='24' :sm='24' :lg='8'>
        <div class="chart-wrapper">
          <pie-chart></pie-chart>
        </div>
      </el-col>
      <el-col :xs='24' :sm='24' :lg='8'>
        <div class="chart-wrapper">
          <bar-chart></bar-chart>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs='{span:24}' :sm='{span:24}' :md='{span:24}' :lg='{span:12}' :xl='{span:12}'>
        <transaction-table></transaction-table>
      </el-col>
      <el-col :xs='{span:12}' :sm='{span:12}' :md='{span:12}' :lg='{span:6}' :xl='{span:6}'>
        <todo-list></todo-list>
      </el-col>
      <el-col :xs='{span:12}' :sm='{span:12}' :md='{span:12}' :lg='{span:6}' :xl='{span:6}'>
        <box-card></box-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GithubCorner from '@/components/githubCorner'
import PanelGroup from './components/panelGroup'
import lineCharts from './components/lineCharts'
import raddarChart from './components/raddarChart'
import pieChart from './components/pieChart'
import barChart from './components/barChart'
import transactionTable from './components/transactionTable'
import todoList from './components/todoList/index'
import boxCard from './components/boxCard'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  name:'adminHome',
  components:{
    GithubCorner,
    PanelGroup,
    lineCharts,
    raddarChart,
    pieChart,
    barChart,
    transactionTable,
    todoList,
    boxCard
  },
  data () {
    return {
      lineChartData:lineChartData.newVisitis
    };
  },
  mounted(){
    
  }
}

</script>
<style lang='scss' scoped>
.home-editor-container {
  position:relative;
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

</style>