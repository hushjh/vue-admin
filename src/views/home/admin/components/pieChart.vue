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
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        calculable: true,
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: 'Industries' },
              { value: 240, name: 'Technology' },
              { value: 149, name: 'Forex' },
              { value: 100, name: 'Gold' },
              { value: 59, name: 'Forecasts' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
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