package main

import "math"

func videoStitching(clips [][]int, T int) int {
	ans := 0
	maxRange := make([]int, T)
	for _, val := range clips {
		l, r := val[0], val[1]
		if l < T && r > maxRange[l] {
			maxRange[l] = r
		}
	}

	pre := 0
	last := 0
	for i := range maxRange {
		if last < maxRange[i] {
			last = maxRange[i]
		}
		if i == last {

			return -1
		}
		if i == pre {
			ans++
			pre = last
		}
	}
	return ans
}

func videoStitching2(clips [][]int, T int) int {
	dp := make([]int, T+1)
	for i := range dp {
		dp[i] = math.MaxInt64 - 1
	}
	dp[0] = 0

	for i := 1; i <= T; i++ {
		for _, v := range clips {
			l, r := v[0], v[1]
			if l < i && i <= r && dp[l]+1 < dp[i] {
				dp[i] = dp[l] + 1
			}
		}
	}

	if dp[T] == math.MaxInt64-1 {
		return -1
	}
	return dp[T]
}
