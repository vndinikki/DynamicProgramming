// 1646. Get Maximum in Generated Array
// https://leetcode.com/problems/get-maximum-in-generated-array/

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let arr = [0,1];
    let max = 1;
    if (n === 0 || n === 1){
        return arr[n];
    }
    for(let i = 2; i <= n; i++){
        let temp = Math.floor(i/2);
        if(i%2 === 0){
            arr[i] = arr[temp];
        } else {
            arr[i] = arr[temp] + arr[temp+1]
        }
        if(arr[i] >max){
            max = arr[i];
        }
    }
    return max;
};
