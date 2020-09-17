package main

import "math"

func maxProfit(prices []int) int {
	min := math.MaxInt32
	maxP := 0
	for i := range prices {
		if min > prices[i] {
			min = prices[i]
		} else if maxP < prices[i]-min {
			maxP = prices[i] - min
		}
	}
	return maxP
}
