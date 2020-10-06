package main

func maxSubArray(nums []int) int {
	pre := 0
	res := nums[0]

	var max func(a int, b int) int
	max = func(a int, b int) int {
		if a > b {
			return a
		}
		return b
	}

	for i := range nums {
		pre = max(pre+nums[i], nums[i])
		res = max(pre, res)
	}

	return res
}
