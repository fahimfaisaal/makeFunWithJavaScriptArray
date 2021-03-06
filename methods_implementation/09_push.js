console.clear();

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let length = arr.push(11, 12, 13, 14, 15);

console.log(arr, length);

/**
 * @title Implementation of push method
 * @param {Array<any>} arr
 * @param {any} any
 * @returns {number} length
 */
function myPush(arr, ...any) {
    const anyLen = any.length;
    
    for (
        let i = arr.length, j = 0;
        j < anyLen;
        i++, j++
    ) {
        arr[i] = any[j];
    }

    return arr.length;
}

length = myPush(arr, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25);
console.log(arr, length);