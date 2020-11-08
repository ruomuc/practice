package main

func maxProfit2(prices []int) int {
	res := 0
	for i := 1; i < len(prices); i++ {
		temp := prices[i] - prices[i-1]
		if temp <= 0 {
			continue
		}
		res += temp
	}
	return res
}
