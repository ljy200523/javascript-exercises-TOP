const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  let runningTotal = 1;
	for (let i = 1; i < number + 1; i++) {
    runningTotal *= i;
  }
  return runningTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
