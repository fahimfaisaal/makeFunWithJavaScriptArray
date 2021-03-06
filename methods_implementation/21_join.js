console.clear();

//* join method return a new string concatenated with passing string
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let joinArr = arr.join('-');
console.log(joinArr, arr);

/**
 * @title Implementation of join method
 * @param {Array<any>} arr
 * @param {string} str
 * @returns {string}
 */
function myJoin(arr, str) {
    let string = new String()

    for (
        let i = 0, len = arr.length;
        i < len; i++
    ) {
        string += (arr[i] + (i !== len - 1 ? str : ''));
    }
    
    return string;
}

let myJoinArr = myJoin(arr, ' |__| ');
console.log(myJoinArr, arr);