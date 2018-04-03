<!--  -->
<template>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="!sidebar.opened" background-color="#304156" 
    text-color="#bfcbd9" active-text-color="#409EFF" class='el-menu-demo' router >
       <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden" >
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
                <i :class="item.iconCls"></i>
                <span slot='title'>{{item.children[0].name}}</span>
            </el-menu-item>
            <el-submenu :index="index+''" v-if="!item.leaf">
                <template slot="title">
                    <i :class="item.iconCls"></i>
                    <span slot='title'>{{item.name}}</span>
                </template>
                <el-menu-item v-for="child in item.children" :index="item.path+'/'+child.path" :key="child.path" v-if="!child.hidden">
                    <span slot='title'>{{child.name}}</span>
                </el-menu-item>
            </el-submenu>
        </template> 
        
    </el-menu>
</template>

<script>

export default {
    data () {
        return {
            isCollapse:false
        };
    },
    components:{
        
    },
    computed:{
        sidebar(){
            return this.$store.getters.sidebar;
        }
    },
    created(){
    }
}

</script>
<style lang='css' >
.el-menu-demo{
    width:200px;
}
.el-menu-demo.el-menu--collapse{
    width:64px;
}
</style>