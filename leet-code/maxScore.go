package main

func maxScore(cardPoints []int, k int) int {
	n := len(cardPoints)
	windowSize := n - k
	sum := 0
	for i := 0; i < windowSize; i++ {
		sum += cardPoints[i]
	}
	minSum := sum
	for i := windowSize; i < n; i++ {
		sum += cardPoints[i] - cardPoints[i-windowSize]
		minSum = min(minSum, sum)
	}
	total := 0
	for _, cp := range cardPoints {
		total += cp
	}
	return total - minSum
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func maxScore(cardPoints []int, k int) int {
	n := len(cardPoints)
	preSum := make([]int, n)
	suffixNum := make([]int, n)
	preSum[0] = cardPoints[0]
	suffixNum[0] = cardPoints[n-1]

	for i := 1; i < n; i++ {
		preSum[i] = preSum[i-1] + cardPoints[i]
		suffixNum[i] = suffixNum[i-1] + cardPoints[n-i-1]
	}
	maxSum := 0
	for i := 0; i <= k; i++ {
		sum := 0
		if i > 0 {
			sum += preSum[i-1]
		}
		if k-i > 0 {
			sum += suffixNum[k-i-1]
		}
		maxSum = max(maxSum, sum)
	}
	return maxSum
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
