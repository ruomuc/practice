package main

func checkSubarraySum(nums []int, k int) bool {
	n := len(nums)
	if n < 2 {
		return false
	}
	mp := make(map[int]int)
	remainder := 0
	for i, num := range nums {
		remainder = (remainder + num) % k
		if remainder == 0 && i > 0 {
			return true
		}
		if preIdx, has := mp[remainder]; has {
			if i-preIdx >= 2 {
				return true
			}
		} else {
			mp[remainder] = i
		}
	}
	return false
}

func checkSubarraySum2(nums []int, k int) bool {
	n := len(nums)
	if n < 2 {
		return false
	}
	mp := map[int]int{0: -1}
	remainder := 0
	for i, num := range nums {
		remainder = (remainder + num) % k
		if preIdx, has := mp[remainder]; has {
			if i-preIdx >= 2 {
				return true
			}
		} else {
			mp[remainder] = i
		}
	}
	return false
}
