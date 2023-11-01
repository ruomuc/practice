// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
package main

func removeDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	fast:=0
	slow:=0

	for fast<len(nums) {
		if nums[fast] != nums[slow] {
			slow++
			nums[slow] = nums[fast]
		}
		fast++
	}

	return slow+1
}
