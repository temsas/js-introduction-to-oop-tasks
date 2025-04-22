// BEGIN
function magic(...numbers){
    let result = numbers.reduce((sum, num) => sum + num, 0)
    function secondMagic(...newNumbers) {
        return magic(...numbers, ...newNumbers)
    }
    secondMagic.valueOf = () => result;
    return secondMagic;
}
export default magic;
// END
