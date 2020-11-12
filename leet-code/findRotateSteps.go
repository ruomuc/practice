package main

import "math"

func findRotateSteps(ring string, key string) int {
	m, n := len(ring), len(key)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, m)
		for j := range dp[i] {
			dp[i][j] = math.MaxInt64
		}
	}

	pos := make([][]int, 26)
	for i := 0; i < m; i++ {
		pos[ring[i]-'a'] = append(pos[ring[i]-'a'], i)
	}

	// 初始化第一个字符
	for _, v := range pos[key[0]-'a'] {
		dp[0][v] = min(v, m-v) + 1
	}

	for i := 1; i < n; i++ {
		for _, j := range pos[key[i]-'a'] {
			for _, k := range pos[key[i-1]-'a'] {
				dp[i][j] = min(dp[i][j], dp[i-1][k]+min(abs(j-k), m-abs(j-k))+1)
			}
		}
	}

	min := math.MaxInt64
	for _, v := range dp[n-1] {
		if v < min {
			min = v
		}
	}
	return min
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}
