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
	f:= func dfs(curr int)
}
