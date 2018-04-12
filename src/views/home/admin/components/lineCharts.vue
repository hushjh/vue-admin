<!--  -->
<template>
  <div ref='lineChart' :class='className' :style='{height:height,width:width}'></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
export default {
  name:'lineCharts',
  props:{
    chartData:{
      type:Object
    },
    className:{
      type:String,
      default:'chart'
    },
    height:{
      type:String,
      default:'350px'
    },
    width:{
      type:String,
      default:'100%'
    }
  },
  data () {
    return {
      chart:null
    };
  },
  beforeDestroy(){
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  mounted(){
    this.$nextTick(()=>{
      this.initChart();
      this.__resizeHanlder=()=>{
        if (this.chart) {
          this.chart.resize()
        }
      }
      window.addEventListener('resize', this.__resizeHanlder)
    });
  },
  watch:{
    chartData:{
      deep:true,
      handle(val){
        this.setOption(val);
      }
    }
  },
  methods:{
    setOption({expectedData,actualData}={}){
      console.log('expectedData:',expectedData,'actualData:',actualData);
      // 绘制图表
      this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
          },
          legend:{
            data:['expected', 'actual']
          },
          xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                show: false
              },
              boundaryGap: false
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          grid:{
            left:10,
            right:10,
            top:20,
            bottom:30,
            containLabel:true
          },
          series: [{
              name: 'expected',
              type: 'line',
              animationDuration: 2800,
              data: expectedData
          },{
              name: 'actual',
              type: 'line',
              animationDuration: 2800,
              data: actualData
          }]
      });
    },
    initChart(){
      this.chart=echarts.init(this.$el,'macarons')// 基于准备好的dom，初始化echarts实例
      this.setOption(this.chartData);
    }
  }
}

</script>
<style lang='css' scoped>
.chart{
  height:350px;
  width:100%;
}
</style>