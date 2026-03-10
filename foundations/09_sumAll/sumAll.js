let smaller = (a,b) => {
    if (a > b) return b;
    else if (b > a) return a;
}

const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    else if (a < 0 || b < 0) {
        return "ERROR";
    }
    let sum = 0;
    const DIFFERENCE =  Math.abs(a-b);
    let smallValue = smaller(a, b);
    for (let i = 0; i <= DIFFERENCE; i++) {
        sum += (DIFFERENCE - i) + smallValue;
    }
    return sum;
};

console.log(sumAll(3, 165));

// Do not edit below this line
module.exports = sumAll;
