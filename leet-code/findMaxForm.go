package main

func findMaxForm(strs []string, m int, n int) int {
	dp := make([][]int, m+1)
	for i := range dp {
		temp := make([]int, n+1)
		dp[i] = temp
	}

	for _, s := range strs {
		zero, one := split(s)

		for i := m; i >= 0; i-- {
			for j := n; j >= 0; j-- {
				if zero > i || one > j {
					dp[i][j] = dp[i][j]
				} else {
					dp[i][j] = max(dp[i][j], 1+dp[i-zero][j-one])
				}
			}
		}
	}
	return dp[m][n]
}

func split(s string) (int, int) {
	zero, one := 0, 0
	for _, v := range s {
		if v == '0' {
			zero++
		} else if v == '1' {
			one++
		}
	}
	return zero, one
}
