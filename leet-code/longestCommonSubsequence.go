package main

func longestCommonSubsequence(text1 string, text2 string) int {
	m, n := len(text1), len(text2)
	dp := make([][]int, m+1)
	for i := 0; i < m+1; i++ {
		dp[i] = make([]int, n+1)
	}

	// 初始化
	for i := 0; i < m+1; i++ {
		dp[i][0] = 0
	}
	for j := 0; j < n+1; j++ {
		dp[0][j] = 0
	}

	// 主逻辑
	// 注意这里的i,j是比下标大1的。
	for i := 1; i < m+1; i++ {
		for j := 1; j < n+1; j++ {
			if text1[i-1] == text2[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = maxInt(dp[i-1][j], dp[i][j-1])
			}
		}
	}
	return dp[m][n]
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
