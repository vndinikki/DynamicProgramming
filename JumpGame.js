// 55. Jump Game
// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let curr = 0;
    for(let i =0; i < nums.length; i++){
        let number = nums[i];
        if(curr < i ) break;
        curr = Math.max(curr, i + number);
    }
    return curr >= nums.length-1
};
