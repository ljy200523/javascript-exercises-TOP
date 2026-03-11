// Rmb to return accumulator in callback fn
const getTheTitles = function (arrayOfObjects) {
    let newArray = []
    arrayOfObjects.reduce((accumulator, currentValue) => {
        accumulator.push(currentValue.title);
        return accumulator;
    }, newArray,
    );
    return newArray;
};

// Ideal method is to use .map
const getTheTitlesTwo = function (arrayOfObjects) {
    return arrayOfObjects.map(obj => obj.title)
}


// Do not edit below this line
module.exports = getTheTitles;
