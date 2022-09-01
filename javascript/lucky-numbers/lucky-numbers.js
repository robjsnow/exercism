// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let array1String = '';
  let array2String = '';
  
 for (let num of array1) {
   array1String += num;
 }
  for (let num of array2) {
     array2String += num;
  }
  
  return Number(array1String) + Number(array2String);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    let string = String(value);
    let length = string.length;

    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
 if (!input) {
   return 'Required field';
 } else if(!Number(input) || input === 0) {
   return 'Must be a number besides 0'
 } else {
   return '';
 }
}
