import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import './assets/theme/theme-green/index.css'
import store from './store'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import router from './router'
import  './permission' //permission control
//后台模拟数据
import Mock from './mock'
Mock.bootstrap();
//svg 图片插件
import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon',Icon)
//import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)

//NProgress.configure({ showSpinner: false });


new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

