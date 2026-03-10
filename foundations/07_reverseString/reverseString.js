const reverseString = function(str) {
    let store = [];
    for (letter of str) {
        store.push(letter);
    }

    let newString = '';

    for (letter of str) {
        newString += store.pop(letter);
    }
    return newString;
};

console.log(reverseString("tired man"));

// Do not edit below this line
module.exports = reverseString;
