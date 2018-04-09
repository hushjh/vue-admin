<!--  -->
<template>
  <div class='home-editor-container'>
    <github-corner></github-corner>
    <panel-group></panel-group>
    <el-row>
      <line-charts></line-charts>
    </el-row>
  </div>
</template>

<script>
import GithubCorner from '@/components/githubCorner'
import PanelGroup from './components/panelGroup'
import lineCharts from './components/lineCharts'
export default {
  name:'adminHome',
  components:{
    GithubCorner,
    PanelGroup,
    lineCharts
  },
  data () {
    return {
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