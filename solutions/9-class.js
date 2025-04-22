import _ from 'lodash';

// BEGIN
class Cart {
    constructor() {
        this.items = [];
    }
    addItem (item, count){
        this.items.push({item: item, count: count})
    }
    getItems(){
        return this.items
    }
    getCost (){
        return this.items.reduce((sum, {item, count}) => {return sum + item.price * count}, 0);
    }
    getCount (){
        return this.items.reduce((sum, {count}) => {return sum + count}, 0);
    }
}
export  default Cart;
// END
