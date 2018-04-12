<!--  -->
<template>
  <div :class='className' :style='{height:height,width:width}'></div>
</template>

<script>
import echarts from 'echarts'
import('echarts/theme/macarons') // echarts theme
const animationDuration = 3000
export default {
  props:{
    className:{
      style:String,
      default:'chart'
    },
    width:{
      style:String,
      default:'100%'
    },
    height:{
      style:String,
      default:'300px'
    }
  },
  data () {
    return {
      chart:null
    };
  },
  mounted(){
    this.initChart();
    this._resize=()=>{
      if(this.chart){
        this.chart.resize()
      }
    }
    window.addEventListener('resize',this._resize)
  },
  beforeDestory(){
    if(!this.chart){
      return
    }
    window.removeEventListener('resize',this._resize)
    this.chart.dispose()
    this.chart=null
  },
  methods:{
    setOption(){
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration
        }]
      })
    },
    initChart(){
      this.chart=echarts.init(this.$el,'macarons');
      this.setOption();
    }
  }
}

</script>
<style lang='css' scoped>

</style>