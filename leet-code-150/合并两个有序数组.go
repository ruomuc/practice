// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
package main

func merge(nums1 []int, m int, nums2 []int, n int) {
	p1 := len(nums1) - 1
	p2 := len(nums2) - 1

	for p1 >= 0 && p2 >= 0 {
		if nums2[p2] > nums1[p1] {
			nums1[p1+p2+1] = nums2[p2]
			p2--
		} else {
			nums1[p1+p2+1] = nums1[p1]
			p1--
		}
	}

	for p2 >= 0 {
		nums1[p1+p2+1] = nums2[p2]
		p2--
	}
}
