// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumpArray = [...Array(nums.length)];
    jumpArray[0] = 0;
    for(let i = 1; i < nums.length; i++){
        jumpArray[i] = Number.MAX_VALUE;
        for(let j = 0;j < i; j++){
            if( i <= j + nums[j] && jumpArray[j] != Number.MAX_VALUE){
                jumpArray[i] = Math.min(jumpArray[i], jumpArray[j]+1)
            }
        }
    }
    return jumpArray[nums.length-1]
}; 
