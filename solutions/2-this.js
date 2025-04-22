// BEGIN
const make = (numer, denom) =>{
    return{
        numer,
        denom,

        setNumer(newNumer){
            this.numer = newNumer;
        },
        setDenom(newDenom){
            this.denom = newDenom;
        },
        getNumer(){
            return this.numer;
        },
        getDenom(){
            return this.denom
        },
        toString(){
            return this.numer + "/" + this.denom
        },
        add(rat){
            let newNumer  = this.numer * rat.getDenom() + this.denom * rat.getNumer();
            let newDenom = this.denom * rat.getDenom();
            return make (newNumer, newDenom)
        }
    }
}
export default make;
// END