<!--  -->
<template>
  <div class='tags-view-wrapper'>
      <router-link ref='tag' class='tags-view-item' v-for='tag in Array.from(visitedViews)' :key='tag.path' 
        :class='isActive(tag) ? "active" :""' :to='tag.path' @click.prevent.native='openView(tag,$event)'>
        {{tag.name}}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
      </router-link>
  </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    computed:{
        visitedViews(){
            return this.$store.getters.visitedViews;
        }
    },
    mounted(){
        this.addViewTags();
    },
    watch:{
        $route(){
            this.addViewTags();
        }
    },
    methods:{
        generateRoute(){
            if(this.$route.name){
                return this.$route;
            }
            return false
        },
        addViewTags(){
            const route=this.generateRoute();
            if(!route){
                return false;
            }
            this.$store.dispatch('addVisitedViews',route);
        },
        isActive(route){
            return route.path===this.$route.path || route.name===this.$route.name;
        },
        openView(tag,event){},
        closeSelectedTag(tag){}
    }
}

</script>
<style lang='css' scoped>
a{
    text-decoration: none;
}
.tags-view-wrapper{
    background: #fff;
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
}
.tags-view-item{
    display: inline-block;
    position: relative;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
}
.tags-view-item:first-of-type {
    margin-left: 15px;
}
.tags-view-item.active{
    background-color: #42b983;
    color: #fff;
    border-color: #42b983;
}
.tags-view-item.active::before{
    content: '';
    background: #fff;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    margin-right: 2px;
}
</style>
</style>
<style lang='scss'>
    .tags-view-wrapper .tags-view-item .el-icon-close{
        width: 16px;
        height: 16px;
        text-align: center;
        border-radius: 50%;
        line-height: 16px;
        &:hover{
            background-color:#b4bccc;
            color:#fff;
        }
        &:before{
            display:inline-block;
            transform:scale(0.6);
            vertical-align: -1px;
        }
    }
</style>