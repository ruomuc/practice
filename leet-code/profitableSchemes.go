package main

import (
	"fmt"
	"math"
)

func profitableSchemes(G int, P int, group []int, profit []int) int {
	mod := int(math.Pow(10, 9) + 7)
	// 初始化一个三维表
	N := len(profit)
	dp := make([][][]int, N+1)
	for i := range dp {
		dp[i] = make([][]int, G+1)
		for j := range dp[i] {
			dp[i][j] = make([]int, P+1)
		}
	}

	// 初始化数据，利润为0的方案只有一种，就是什么罪都不犯
	for i := 0; i <= N; i++ {
		for j := 0; j <= G; j++ {
			dp[i][j][0] = 1
		}
	}
	fmt.Println(dp)
	// 填充三维表
	for i := 1; i <= N; i++ {
		for j := 1; j <= G; j++ {
			for k := 0; k <= P; k++ {
				// 如果不犯，方案不变
				dp[i][j][k] = dp[i-1][j][k]
				// 人数大于0才有意义
				if j-group[i-1] >= 0 {
					// 如果利润为负数，没有意义
					pw := max(k-profit[i-1], 0)
					// 状态转义方程，犯这个罪的方案
					dp[i][j][k] += dp[i-1][j-group[i-1]][pw]
				}
				dp[i][j][k] %= mod
			}
		}
	}
	return dp[N][G][P] % mod
}

// 压缩空间维度
func profitableSchemes2(G int, P int, group []int, profit []int) int {
	mod := int(math.Pow(10, 9) + 7)
	// 初始化一个三维表
	N := len(profit)
	dp := make([][]int, G+1)
	for i := range dp {
		dp[i] = make([]int, P+1)
	}

	// 初始化数据，利润为0的方案只有一种，就是什么罪都不犯
	for j := 0; j <= G; j++ {
		dp[j][0] = 1
	}

	fmt.Println(dp)
	// 填充三维表
	for i := 1; i <= N; i++ {
		for j := G; j >= 1; j-- {
			for k := P; k >= 0; k-- {
				// 人数大于0才有意义
				if j-group[i-1] >= 0 {
					// 如果利润为负数，没有意义
					pw := max(k-profit[i-1], 0)
					// 状态转义方程，犯这个罪的方案
					dp[j][k] += dp[j-group[i-1]][pw]
				}
				dp[j][k] %= mod
			}
		}
	}
	return dp[G][P] % mod
}
