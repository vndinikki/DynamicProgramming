// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = 0;
    let maxSum = -Math.pow(10, 50) - 1;
    
    for ( let i = 0; i < nums.length; i++){
        currSum += nums[i];
        if( maxSum < currSum){
            maxSum = currSum;
        } 
        if ( currSum < 0){
            currSum = 0;
        }
    }
    return maxSum;
};
