package main

func longestOnes(A []int, K int) int {
	n := len(A)
	ans, zeroNum := 0, 0
	left, right := 0, 0
	if A[right] == 0 {
		zeroNum++
	}

	for right < n-1 {
		// 右指针移动
		if A[right] == 0 {
			zeroNum++
		}
		right++
		// 左指针右移，直到窗口0的个数不大于K
		for zeroNum > K {
			if A[left] == 0 {
				zeroNum--
			}
			left++
		}
		ans = max(ans, right-left+1)
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// 优化之后还没上面的快。。。

func longestOnes2(A []int, K int) int {
	n, left, right, ans := len(A), 0, 0, 0
	for ; right < n; right++ {
		// 右指针移动
		if A[right] == 0 {
			K--
		}
		for K < 0 {
			if A[left] == 0 {
				K++
			}
			left++
		}
		ans = max(ans, right-left+1)
	}
	return ans
}
