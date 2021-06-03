package main

func findMaxLength(nums []int) int {
	ans := 0
	mp := map[int]int{0: -1}

	count := 0
	for i, num := range nums {
		if num == 0 {
			count--
		} else {
			count++
		}

		if preIdx, has := mp[count]; has {
			ans = max(ans, i-preIdx)
		} else {
			mp[count] = i
		}
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
