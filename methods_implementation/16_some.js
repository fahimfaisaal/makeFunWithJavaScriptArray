console.clear();

//* some return a boolean value mean true or false, In this method if one item match the condition it's return true

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isTen = arr.some((item, index, arr) => {
    // console.log(item, index, arr);

    return item === 10;
})

const isEleven = arr.some(item => item === 11);
console.log(isTen, isEleven);

/**
 * @title Implementation of some method
 * @param {anyType} array
 * @function callback -> {
 * @argument {anyType} array[i]
 * @argument {number} i
 * @argument {Array<any>} array
 * }
 * @returns {boolean}
 */
function mySome(array, callback) {
    for (
        let i = 0, len = array.length;
        i < len; i++
    ) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }

    return false;
}

const isNine = mySome(arr, item => item === 9);
const isLess = mySome(arr, item => item < 0);
console.log(isNine, isLess);