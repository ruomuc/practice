package main

func nextGreaterElements(nums []int) []int {
	n := len(nums)
	stack := make([]int, 0)
	ans := make([]int, n)
	for i := 0; i < n; i++ {
		ans[i] = -1
	}

	for i := 0; i < 2*n; i++ {
		for len(stack) > 0 && nums[stack[len(stack)-1]] < nums[i%n] {
			ans[stack[len(stack)-1]] = nums[i%n]
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, i%n)
	}
	return ans
}
