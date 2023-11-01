// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

package main

import "math"

func maxProfit(prices []int) int {
	minPrice := math.MaxInt
	maxProfit := 0

	for _, v := range prices {
		if v < minPrice {
			minPrice = v
		} else if maxProfit < v - minPrice {
			maxProfit = v - minPrice
		}
	}

	return maxProfit
}
