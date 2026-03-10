const fibonacci = function(number) {
    let a = 0;
    let b = 1;
    let runningCount = 0;
    for(let i = 0; i < number; i++) {
        console.log("a = ", a);
        console.log("b = ", b);
        runningCount = (a + b);
        a = b;
        b = runningCount;
        console.log("runningCount = ", runningCount);
    }
    return runningCount;
};
console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
