package main

func maxProfit(prices []int, fee int) int {
	profit := 0
	buy := prices[0] + fee
	for i := 1; i < len(prices); i++ {
		if prices[i]+fee < buy {
			buy = prices[i] + fee
		} else if prices[i] > buy {
			profit+=prices[i]-buy
			buy = prices[i]
		}
	}
	return profit
}
