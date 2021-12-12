// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let num = [[1]];
    for(i = 1; i < numRows; i++){
        let tempArr = [];
        for ( j = 0; j < i+1; j++){
          (j == 0|| j == i) ? 
             tempArr.push(1) :
             tempArr.push(parseInt(num[i-1][j-1])+ parseInt(num[i-1][j]));
        }
        num.push(tempArr);
    }
    return num;
};
