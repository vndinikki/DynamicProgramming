// 119. Pascal's Triangle II
// https://leetcode.com/problems/pascals-triangle-ii/


// First approach
/**
 * @param {number} rowIndex
 * @return {number[]}
 * Formula used: nCr = (nCr-1 * (n - r + 1))/r
 */
var getRow = function(rowIndex) {
    let prev = curr =  1;
    let temp = [];
    temp.push(prev)
    for(let i = 1; i <= rowIndex; i++){
        curr = ( prev * (rowIndex - i + 1))/i;
        temp.push(curr);
        prev = curr;
    }
    return temp;
};


// Second approach
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getNewRow = function(index, temp){
    let newList = [1]
    let length = 0;
    for (let i =0 ; i < temp.length-1; i++) {
        newList.push(temp[i]+temp[i+1]);
    }
    if(index % 2 === 0 && index > 2){
        newList.push(temp[temp.length-1]+ temp[temp.length-1])
    }
    return newList;
}
var getRow = function(rowIndex) {
   let  temp = [1, 1];
    if(rowIndex <=1){
      if( rowIndex === 0 ) return [1] 
      else return temp;
    }
    for ( let i = 2; i <= rowIndex; i++){
        temp = getNewRow( i, temp);
    }
    let newList = temp.slice();
    let index = rowIndex % 2 === 0 ? temp.length -2 : temp.length-1;
    for ( let i = index; i >= 0; i-- ){
        newList.push(temp[i])
    }
    return newList;
}
