package main

import (
	"math"
	"sort"
)

func coinChange(coins []int, amount int) int {
	if amount == 0 {
		return 0
	}
	ans := math.MaxInt64
	sort.Slice(coins, func(a, b int) bool {
		return coins[a] > coins[b]
	})
	var dfs func(amount int, idx int, count int)

	dfs = func(amount int, idx int, count int) {

		if amount == 0 {
			ans = min(ans, count)
			return
		}
		if idx == len(coins) {
			return
		}

		for k := int(math.Floor(float64(amount / coins[idx]))); k >= 0 && k+count < ans; k-- {
			dfs(amount-k*coins[idx], idx+1, count+k)
		}
	}
	dfs(amount, 0, 0)
	if ans == math.MaxInt64 {
		return -1
	}
	return ans
}

// 动态规划
func coinChange2(coins []int, amount int) int {
	if amount == 0 {
		return 0
	}
	dp := make([]int, amount+1)
	for i := range dp {
		dp[i] = amount + 1
	}
	dp[0] = 0

	for i := 1; i <= amount; i++ {
		for j := range coins {
			if i-coins[j] < 0 {
				continue
			}
			dp[i] = min(dp[i], 1+dp[i-coins[j]])
		}
	}
	if dp[amount] > amount {
		return -1
	}
	return dp[amount]
}
