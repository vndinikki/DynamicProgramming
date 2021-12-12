// 1137. N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let triArray = [0, 1, 1,0];
    if(n == 0 || n == 1 || n== 2){
        return triArray[n]
    }
    for ( let i = 3; i <= n; i++){
        triArray[3] = triArray[0] + triArray[1] + triArray[2];
        triArray[0] = triArray[1];
        triArray[1] = triArray[2];
        triArray[2] = triArray[3];
    }
    return triArray[3];
};
