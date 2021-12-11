// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    let arr = [0, 1, 0];
    
    // base case
    if( n == 0 || n == 1){
        return arr[n];
    }
    for ( let i = 2; i <=n; i++){
        arr[3] = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = arr[3];
    }
    return arr[3];
};
