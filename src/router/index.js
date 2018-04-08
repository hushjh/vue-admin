import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Main from '@/views/Main.vue'

import Login from '@/views/login'
console.log('router:',process.env.NODE_ENV);
const _import=require('./_import_'+process.env.NODE_ENV)

Vue.use(VueRouter)
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: _import('errPage/404'),
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path:'',
        component:Layout,
        name:'主页',
        redirect:'/home',
        hidden:true,
        children:[
            {path:'home',component:_import('home/index'),name:'主页',hidden:true}
        ]
    },
    {
        path: '/nav1',
        component: Layout,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: 'main', component: _import('nav1/userAdmin'), name: '主页', hidden: true },
            { path: 'table', component: _import('nav1/Table'), name: 'Table' },
            { path: 'form', component: _import('nav1/Form'), name: 'Form' },
            { path: 'user', component: _import('nav1/user'), name: '列表' },
            {path:'userAdmin',component:_import('nav1/userAdmin'),name:'用户管理'},
            {path:'comInfo',component:_import('nav1/comInfo'),name:'公司信息管理'}
        ]
    },
    {
        path: '/nav2',
        component: Layout,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: 'page4', component: _import('nav2/Page4'), name: '页面4' },
            { path: 'page5', component: _import('nav2/Page5'), name: '页面5' }
        ]
    },
    {
        path: '/charts',
        component: Layout,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: 'echarts', component: _import('charts/echarts'), name: 'echarts' }
        ]
    },
    {
        path:'/components',
        component:Layout,
        name:'组件',
        iconCls:'el-icon-document',
        children:[
            {path:'sticky',component:_import('components-demo/sticky'),name:'置顶'},
            {path:'countTo',component:_import('components-demo/countTo'),name:'CountTo'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

const router = new VueRouter({
    mode:'history',
    routes
  })
export default router;