// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [1,1];
    if( n === 1){
        return 1;
    }
    for(let i = 2; i <= n; i++){
        let temp = arr[1];
        arr[1] = arr[0] + arr[1];
        arr[0] = temp;
    }
    return arr[1];
};
