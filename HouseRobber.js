//198. House Robber
// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    switch(nums.length){
        case 0:
            return 0;
        case 1:
            return nums[0];
        case 2:
            return Math.max(nums[0], nums[1]);
        default:
            break;
    }
    let d2 = nums[0];
    let d1 = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length; i++){
        let temp = Math.max(d2+nums[i], d1);
        d2 = d1;
        d1 = temp;
    }
    return d1;
};
