const user={
    state:{
        roles:['admin']
    },
    mutations:{
        SET_ROLES(state,roles){
            state.roles=roles;
        }
    },
    actions:{
        set_roles({commit},roles){
            commit('SET_ROLES',roles);
        }
    },
    getters:{
        roles(state){
            return state.roles;
        }
    }
}

export default user