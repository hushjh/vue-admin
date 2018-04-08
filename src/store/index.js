import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'

Vue.use(Vuex);

// 应用初始状态
const state = {
    count: 10
}
export default new Vuex.Store({
    modules:{
        app,
        tagsView,
        user
    },
    state
});