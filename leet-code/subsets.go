package main

// 位运算法
func subsets(nums []int) [][]int {
	n := len(nums)
	ans := make([][]int, 0)
	for i := 0; i < 1<<n; i++ {
		temp := make([]int, 0)
		for j := range nums {
			if (i & (1 << j)) != 0 {
				temp = append(temp, nums[j])
			}
		}
		ans = append(ans, temp)
	}
	return ans
}

// 递归，回溯算法
func subsets2(nums []int) [][]int {
	ans := make([][]int, 0)
	temp := make([]int, 0)
	n := len(nums)
	var f func(curr int)
	f = func(curr int) {
		if curr == n {
			t1 := make([]int, len(temp))
			copy(t1, temp)
			ans = append(ans, t1)
			return
		}
		temp = append(temp, nums[curr])
		f(curr + 1)
		temp = temp[:len(temp)-1]
		f(curr + 1)
	}
	f(0)
	return ans
}
