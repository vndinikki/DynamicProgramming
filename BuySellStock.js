// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let output = 0; 
    let currMax = 0; 
    for(let i = prices.length-1; i >= 0; i--){
        if(prices[i] > currMax ){
            currMax = prices[i];
        } else {
            let currSum = currMax - prices[i];
            if(output < currSum){
                output = currSum;
            }
        }
    }
    return output
};
