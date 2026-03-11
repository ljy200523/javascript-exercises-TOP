const fibonacci = function(number) {
    if (number < 0) return "OOPS"
    else if (typeof(number) === String) {
        number = Number(number)
    }
    else if (number == 1) return 1; 
    let a = 0;
    let b = 1;
    let runningCount = 0;
    for(let i = 0; i < number - 1; i++) {
        console.log("a = ", a);
        console.log("b = ", b);
        runningCount = (a + b);
        a = b;
        b = runningCount;
        console.log("runningCount = ", runningCount);
    }
    return runningCount;
};
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
