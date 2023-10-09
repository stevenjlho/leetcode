# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

## Intuition
We can iterate through the array and keep track of the minimum stock price seen, `minPrice`, and calculate the potential profit that could be obtained by selling at the current price (`prices[i] - minPrice`).

## Approach
1. Initialize `minPrice` to the first stock price in the array and `maxProfit` to 0, representing the current maximum profit.
2. Iterate through the array of stock prices.
3. Update `minPrice` to the minimum of its current value and the current stock price. This ensures we always have the minimum price seen so far.
4. Calculate the potential profit that could be obtained by selling at the current price, which is `prices[i] - minPrice`. This is essentially how much you would gain if you sold at the current price, assuming you bought at minPrice.
5. Update `maxProfit` to the maximum of its current value and the calculated profit. This step effectively tracks the maximum profit achievable.
6. Finally, return the value of `maxProfit`, which represents the maximum profit that can be obtained.

## Complexity
- Time complexity: O(n) The algorithm iterates through the array of stock prices once, performing constant-time operations at each step.
- Space complexity: O(1) The algorithm uses a constant amount of extra space to store variables.

## Code
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    } 

    return maxProfit;
};
```