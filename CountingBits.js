// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/


/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
    let arr = [0];
    let rem = 0;
    let powCount = 0;
    let power =  Math.pow(2, powCount);
    for (let i = 1; i <= n ; i++){
        // base case
        rem = i % power;
        if( rem==0){
           arr.push(1)
            power = Math.pow(2, powCount++);
        }
        else if ( rem < power){           
            let val = 1 + parseInt(arr[rem]);
            arr.push(val);
        }
    }
    return arr
};
