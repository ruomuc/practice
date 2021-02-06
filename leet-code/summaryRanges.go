package main

import (
	"fmt"
)

func summaryRanges(nums []int) []string {
	ans := make([]string, 0)
	for i, n := 0, len(nums); i < n; {
		last := i
		for i++; i < n && nums[i-1]+1 == nums[i]; i++ {
		}
		s := fmt.Sprintf("%d", nums[last])
		if last < i-1 {
			s = fmt.Sprintf("%d->%d", nums[last], nums[i-1])
		}
		ans = append(ans, s)
	}
	return ans
}
