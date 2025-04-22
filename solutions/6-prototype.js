// BEGIN
function Money(value, currency = 'usd'){
    this.value = value
    this.currency = currency
}
Money.prototype.getValue = function (){
    return this.value
}
Money.prototype.getCurrency = function (){
    return this.currency
}

Money.prototype.exchangeTo = function (newCurrency) {
    if (this.currency === newCurrency) {
        return new Money(this.value, this.currency)
    }
    let newValue;
    if (this.currency === 'usd' && newCurrency === 'eur') {
        const newValue = this.value * 0.7;
        return new Money(newValue, 'eur')
    }
    if (this.currency === 'eur' && newCurrency === 'usd') {
        const newValue = this.value * 1.2;
        return new Money(newValue, 'usd')
    }
}
Money.prototype.add = function (money) {
    if (this.currency === money.getCurrency()) {
        return new Money(this.value + money.getValue(), this.currency)
    }
    if (this.currency === 'usd') {
        const newValue = this.value + money.getValue() * 1.2
        return new Money(newValue, this.currency)
    }
    if (this.currency === 'eur') {
        const newValue = this.value + money.getValue() * 0.7
        return new Money(newValue, this.currency)
    }
}
    Money.prototype.format = function () {
        return this.value.toLocaleString (undefined, { style: 'currency', currency: this.currency})
    }
export default Money;
// END
