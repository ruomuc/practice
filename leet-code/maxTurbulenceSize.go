package main

func maxTurbulenceSize(arr []int) int {
	n := len(arr)
	left, right := 0, 0
	ans := 1
	for right < n-1 {
		if left == right {
			if arr[left] == arr[left+1] {
				left++
			}
			right++
		} else {
			if arr[right-1] < arr[right] && arr[right+1] < arr[right] {
				right++
			} else if arr[right-1] > arr[right] && arr[right+1] > arr[right] {
				right++
			} else {
				left = right
			}
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
