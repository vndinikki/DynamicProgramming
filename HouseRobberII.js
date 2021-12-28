// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/submissions/

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
    // including first element
    let f2 = nums[0];
    let f1 = Math.max(nums[0], nums[1]);
    // including last element
    let l2 = nums[1];
    let l1 = Math.max(nums[1], nums[2]);
    for(let i = 2; i < nums.length-1; i++){
        let ftemp = Math.max(f2 + nums[i], f1);
        f2 = f1;
        f1 = ftemp;
        let ltemp = Math.max(l2 + nums[i+1], l1);
        l2 = l1;
        l1 = ltemp;
    }
    return Math.max(f1, l1)
};
