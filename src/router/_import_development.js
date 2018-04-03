//module.exports=file=>{return require('@/views/'+file+'.vue')}
module.exports=file=> require('@/views/'+file+'.vue')
//module.exports = file => () => import('@/views/' + file + '.vue')