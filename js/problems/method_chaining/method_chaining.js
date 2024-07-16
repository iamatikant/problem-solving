const calculator = {
  add: function (num) {
    this.total += num;
    return this;
  },
  subtract: function (num) {
    this.total -= num;
    return this;
  },
  divide: function (num) {
    this.total = this.total / num;
    return this;
  },
  multiply: function (num) {
    this.total *= num;
    return this;
  },
  total: 0,
};

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);
//20
