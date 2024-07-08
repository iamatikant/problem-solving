const calculator = (num1) => {
  let result = num1;
  return {
    add: function (num2) {
      result += num2;
      console.log(this);
      return this;
    },
    subtract: function (num3) {
      result -= num3;
      return this;
    },
    mul: function (num4) {
      result *= num4;
      return result;
    },
  };
};

// calculator(4).add(2).subtract(3).mul(4);

console.log(calculator(4).add(2).add(3).subtract(1).mul(3));
