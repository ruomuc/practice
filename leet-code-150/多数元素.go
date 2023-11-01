// https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

package main

func majorityElement(nums []int) int {
	dict := make(map[int]int)

	for i, v := range nums {
		if _, ok := dict[i]; !ok {
			dict[v] = 1
		} else {
			dict[v]++
		}
	}

	maxKey := 0

	for k, v := range dict {
		if dict[maxKey] < v {
			maxKey = k
		}
	}

	return maxKey
}
