// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150

package main

func maxProfit(prices []int) int {
	profit := 0
	for i:=1; i<len(prices); i++ {
		if prices[i] > prices[i-1] {
			profit += prices[i] - prices[i-1]
		} 
	}

	return profit
}
