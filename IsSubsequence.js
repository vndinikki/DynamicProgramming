// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = 0;
    if(s.length === count){
        return true;
    }
    for(let i = 0; i < t.length;i++){
        if(t.charAt(i) === s.charAt(count)){
            count ++;
        }
        if(s.length === count){
                return true;
        }
    }
    return false;
};
