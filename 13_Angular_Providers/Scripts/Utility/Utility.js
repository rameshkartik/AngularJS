function Utility() {
    this.UpperCase = function (value) {
        return value.toUpperCase();
    }
    this.RoundUp = function (value, round) {
        var num = Number(value);
        return parseFloat(num.toFixed(round));

    }
}