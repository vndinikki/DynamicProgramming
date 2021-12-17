// 1641. Count Sorted Vowel Strings
// https://leetcode.com/problems/count-sorted-vowel-strings/

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let arr = [1, 1, 1, 1, 1];
    for ( let i = 1; i < n; i++){
        arr[1] += arr[0];
        arr[2] += arr[1];
        arr[3] += arr[2];
        arr[4] += arr[3];
    }
    return arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
};
