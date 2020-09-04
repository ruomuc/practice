package main

func minCount(coins []int) int {
	count := 0
	for i := range coins {
		count += (coins[i] + 1) / 2
	}
	return count
}
