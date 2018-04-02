// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}
// 定义所需的 actions
const increment = ({commit}) => {
    commit('INCREMENT')
}
const decrement = ({commit}) => {
    commit('DECREMENT')
}
// 定义所需的getters
const getCount = state => {
    return state.count
}

const app={
    state:{
        sidebar:{
            opened:true
        }
    },
    mutations:{
        TOGGLE_SIDEBAR(state){
            state.sidebar.opened=!state.sidebar.opened;
        } 
    },
    actions:{
        increment,
        decrement,
        toggleSideBar({commit}){
            commit('TOGGLE_SIDEBAR');
        }
    },
    getters:{
        getCount,
        sidebar(state){
            return state.sidebar;
        }
    }
}

export default app