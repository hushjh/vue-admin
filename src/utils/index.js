export function deepClone(...args){
    var tObj=null;
    args.forEach((item,index)=>{
        tObj=clone(tObj,item)
    })
    return tObj;
}
function clone(tObj,source){
    if(!source && typeof source !=='object'){
        throw new error('error arguments','shallowclone')
    }
    tObj=source.constructor===Array?[]:{};
    Object.keys(source).forEach((key)=>{
        if(source[key] && typeof source[key]==='object'){
            tObj[key]=source[key].constructor===Array?[]:{};
            tObj[key]=clone(tObj[key],source[key])
        }else{
            tObj[key]=source[key];
        }
    })
    return tObj
}