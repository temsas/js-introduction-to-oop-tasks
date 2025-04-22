// BEGIN
const each = (collection, callback) =>{
    for (const obj of collection){
        callback.call(obj)
    }

}
export default each;
// END
