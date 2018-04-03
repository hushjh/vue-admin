const tagsView={
    state:{
        visitedViews:[]
    },
    mutations:{
        ADD_VISITED_VIEWS(state,view){
            if(state.visitedViews.some((v)=>v.path===view.path))return
            state.visitedViews.push({
                path:view.path,
                name:view.name
            })
        },
        DEL_VISITED_VIEWS(state,view){
            for(const [i,v] of state.visitedViews.entries()){
                if(v.path===view.path){
                    state.visitedViews.splice(i,1);
                    break;
                }
            }
        }
    },
    actions:{
        addVisitedViews({commit},view){
            commit('ADD_VISITED_VIEWS',view);
        },
        delVisitedViews({commit,state},view){
            return new Promise((resolve,reject)=>{
                commit('DEL_VISITED_VIEWS',view);
                resolve([...state.visitedViews]);
            }); 
        }
    },
    getters:{
        visitedViews:state=>state.visitedViews
    }
}
export default tagsView