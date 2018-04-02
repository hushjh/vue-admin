<!--  -->
<template>
  <div class='main-right'>
        <div class='right-top'>
            <tags-view class='tagsview-container'></tags-view>
            <!-- <breadcrumb class="breadcrumb-container"></breadcrumb> -->
        </div>
        <div class="right-main">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'
import TagsView from './TagsView'
export default {
    data () {
        return {
        };
    },
    components:{
        Breadcrumb,
        TagsView
    }
}

</script>
<style lang='css' scoped>
.main-right{
    flex:1;
}
.right-top{
    height:34px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    
}
.tagsview-container{
    flex:1;
}
.breadcrumb-container{
    margin-right:40px;
}
.right-main{
    width: calc(100% - 20px);
    box-sizing: border-box;
    padding: 20px;
    height: calc(100vh - 115px);
    overflow-y: auto;
}

</style>
