// BEGIN
const bind = (obj, fn) =>{
    return function (...args){
        return fn.apply(obj,args)
    }
}
export default bind;
// END