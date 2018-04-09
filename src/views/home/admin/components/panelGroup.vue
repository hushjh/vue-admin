<!--  -->
<template>
  <el-row :gutter="40" class='panel-group'>
    <el-col :xs='12' :sm='12' :lg='6' class='card-panel-col'>
      <div class='card-panel' >
        <div class='card-panel-icon-wrapper icon-people'>
          <icon name='peoples' :scale='5' ></icon>
        </div>
        <div class='card-panel-description'>
          <div class="card-panel-text">New Visiters</div>
          <count-to class="card-panel-num" :startVal='0' :endVal='102400' :duration='2600'></count-to>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name:'panelGroup',
  components:{countTo},
  data () {
    return {
    };
  }
}

</script>
<style lang='scss' scoped>
.panel-group{
  .card-panel-col{
    margin-bottom:32px;
    .card-panel{
      background-color:#fff;
      height:108px;
      position:relative;
      overflow:hidden;
      &:hover .card-panel-icon-wrapper{
        background-color:#40c9c6;
      }
      &:hover .icon-people{
        color:#fff;
      }
      .card-panel-icon-wrapper{
        margin: 14px 0 0 14px;
        padding: 16px;
        float:left;
        border-radius:6px;
        transition:all 0.3s;
      }
      .icon-people{
        color: #40c9c6;
      }
      .card-panel-description{
        font-weight: bold;
        margin: 26px;
        margin-left:0px;
        float:right;
        .card-panel-text{
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num{
          font-size:20px;
        }
      }
    }
  }
}
</style>