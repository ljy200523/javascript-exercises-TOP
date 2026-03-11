const findTheOldest = function(arrayOfObjects) {
    let newArray = arrayOfObjects.reduce((accumulator, currentValue) => {
        if (currentValue.yearOfDeath === undefined) {
            currentValue.yearOfDeath = new Date().getFullYear();
        }
        accumulator.push(
            {name: currentValue.name, 
            years: (currentValue.yearOfDeath - currentValue.yearOfBirth)
            });
        return accumulator;
    }, [])
    newArray.sort((a, b) => b.years - a.years);
    return newArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
