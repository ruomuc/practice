package main

import "math"

func nthUglyNumber(n int) int {
	dp := make([]int, n+1)
	dp[1] = 1
	// 丑数因子
	p2, p3, p5 := 1, 1, 1

	for i := 2; i <= n; i++ {
		v2, v3, v5 := 2*dp[p2], 3*dp[p3], 5*dp[p5]
		dp[i] = mins(v2, v3, v5)
		if v2 == dp[i] {
			p2++
		}
		if v3 == dp[i] {
			p3++
		}
		if v5 == dp[i] {
			p5++
		}
	}
	return dp[n]
}

func mins(nums ...int) int {
	min := math.MaxInt64
	for _, v := range nums {
		if v < min {
			min = v
		}
	}
	return min
}
