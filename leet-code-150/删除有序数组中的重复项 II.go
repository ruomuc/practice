// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
package main

func removeDuplicates(nums []int) int {
	if len(nums) <= 2{
		return len(nums)
	}
	
	pre := 2
	for i:= 2; i<len(nums); i++ {
		if nums[i] != nums[pre-2] {
			nums[pre] = nums[i]
			pre++
		}
	}

	return pre
}

