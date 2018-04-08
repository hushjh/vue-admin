<!--  -->
<template>
  <div class='components-container'>
      <p class="warn-content">
          <a href="javascript:void(0)">components-demo countTo</a>
      </p>
      <count-to ref='example' class='example' :start-val='_startVal' :end-val='_endVal' :duration='_duration'
      :decimals='_decimals' :separator='_separator' :prefix='_prefix' :suffix='_suffix' :autoplay='false'></count-to>
        <el-form class='clearfix'>
            <el-col :span='6'>
                <el-form-item label="startVal">
                    <el-col :span='12'><el-input v-model.number="setStartVal"></el-input></el-col>
                </el-form-item>
            </el-col>
            <el-col :span='6'>
                <el-form-item label="setEndVal">
                    <el-col :span='12'><el-input v-model.number="setEndVal"></el-input></el-col>
                </el-form-item>
            </el-col>
            <el-col :span='6'>
                <el-form-item label="setDuration">
                    <el-col :span='12'><el-input v-model.number="setDuration"></el-input></el-col>
                </el-form-item>
            </el-col>
            <el-col :span='6'>
                <el-form-item label="setDecimals">
                    <el-col :span='12'><el-input v-model.number="setDecimals"></el-input></el-col>
                </el-form-item>
            </el-col>
            <el-col :span='6'>
                <el-form-item label="setSeparator">
                    <el-col :span='12'><el-input v-model="setSeparator"></el-input></el-col>
                </el-form-item>
            </el-col>  
            <el-col :span='6'>
                <el-form-item label="setPrefix">
                    <el-col :span='12'><el-input v-model="setPrefix"></el-input></el-col>
                </el-form-item>
            </el-col> 
            <el-col :span='6'>
                <el-form-item label="setSuffix">
                    <el-col :span='12'><el-input v-model="setSuffix"></el-input></el-col>
                </el-form-item>
            </el-col> 
            <el-col :span='6' >
                <el-col :span='12'><el-button type='primary' @click='start'>start</el-button></el-col>
                <el-col :span='12'><el-button type='primary' @click='pauseResume'>pause</el-button></el-col>
            </el-col> 
        </el-form>
        <code>&lt;count-to :start-val=&#x27;{{_startVal}}&#x27;:end-val=&#x27;{{_endVal}}&#x27; :duration=&#x27;{{_duration}}&#x27;
        :decimals=&#x27;{{_decimals}}&#x27; :separator=&#x27;{{_separator}}&#x27; :prefix=&#x27;{{_prefix}}&#x27; :suffix=&#x27;{{_suffix}}&#x27;
        :autoplay=false&gt;</code>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
    name:'countTo-demo',
    components:{countTo},
    data () {
        return {
            setStartVal:0,
            setEndVal:2017,
            setDuration:3000,
            setDecimals:0,
            setSeparator: ',',
            setSuffix: ' rmb',
            setPrefix: '¥ '
        }
    },
    computed:{
        _startVal(){
            if(this.setStartVal){
                return this.setStartVal;
            }else{
                return 0;
            }
        },
        _endVal(){
            if(this.setEndVal){
                return this.setEndVal;
            }else{
                return 0;
            }
        },
        _duration(){
            if(this.setDuration){
                return this.setDuration;
            }else{
                return 100;
            }
        },
        _decimals(){
            if(this.setDecimals){
                if(this.setDecimals<0 || this.setDecimals>20){
                    alert('digits argument must be between 0 and 20');
                    return 0;
                }
                return this.setDecimals
            }else{
                return 0
            }
        },
        _separator(){
            return this.setSeparator;
        },
        _prefix(){
            return this.setPrefix;
        },
        _suffix(){
            return this.setSuffix;
        }
    },
    methods:{
        start(){
            this.$refs.example.start();
        },
        pauseResume(){
            this.$refs.example.pauseResume();
        }
    }
}

</script>
<style lang='scss' scoped>
.components-container{
    padding:20px 40px;
    .warn-content{
        background-color:rgba(66, 185, 131, 0.1);
        border-radius:2px;
        padding:1rem;
        line-height:1.6rem;
        a{
            color:#42b983;
            font-weight: 600;
            text-decoration: none;
        }
    }
    .example {
        font-size: 50px;
        color: #F6416C;
        display: block;
        margin: 10px 0;
        text-align: center;
        font-size: 80px;
        font-weight: 500;
    }
    .clearfix::after{
        content:'';
        display:block;
        clear: both;
    }
    code {
        background: #eef1f6;
        padding: 15px 16px;
        margin-bottom: 20px;
        display: block;
        line-height: 36px;
        font-size: 15px;
        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
}
</style>