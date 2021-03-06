function execute( input ) {
    let lines = input.split("\n");

    let oxygenGeneratorEntry = filterEntries(lines.slice(), true);
    let co2ScrubberEntry = filterEntries(lines.slice(), false);

    let lifeSupport = parseInt(oxygenGeneratorEntry.join(""), 2) * parseInt(co2ScrubberEntry.join(""), 2);
    
    return lifeSupport;
}

function filterEntries(array, findMostCommon, index = 0) {
    if (array.length == 1)
        return array;

    let sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += parseInt(array[i][index]);
    }

    let newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (sum >= (array.length / 2)) {
            if (findMostCommon && array[i][index] == 1) {
                newArray.push(array[i]);
            } else if (!findMostCommon && array[i][index] == 0) {
                newArray.push(array[i]);
            }
        } else {
            if (findMostCommon && array[i][index] == 0) {
                newArray.push(array[i]);
            } else if (!findMostCommon && array[i][index] == 1) {
                newArray.push(array[i]);
            }
        }
    }

    return filterEntries(newArray, findMostCommon, index+1);
}