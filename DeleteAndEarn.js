// 740. Delete and Earn
// https://leetcode.com/problems/delete-and-earn/

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let arr = new Array(Math.max(...nums)).fill(0);
    nums.forEach((i)=>arr[i-1]+=i)
    if(arr.length === 1){
        return 1;
    }
    arr[1] = Math.max(arr[0], arr[1]);
    for(let i = 2; i < arr.length; i++){
        arr[i] = Math.max(arr[i-1], arr[i-2]+arr[i])
    }
    return arr[arr.length-1]
};
