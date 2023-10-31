// https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
package main

func removeElement(nums []int, val int) int {
	fast := 0
	slow := 0
	if len(nums) == 0 {
		return 0
	}

	for fast < len(nums) {
		if nums[fast] != val {
			nums[fast], nums[slow] = nums[slow], nums[fast]
			slow++
		}
		fast++
	}

	return slow
}
