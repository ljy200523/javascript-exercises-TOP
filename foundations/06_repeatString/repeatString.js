const repeatString = function(str, nums) {
    if (nums < 0) return 'ERROR';
    let show = '';
    for (let i = 0; i < nums; i++) {
        show += str;
    }
    return(show)
};


// Do not edit below this line
module.exports = repeatString;
