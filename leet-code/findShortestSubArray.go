package main

import "math"

type ele struct {
	count int
	start int
	end   int
}

func findShortestSubArray(nums []int) int {
	eleMap := make(map[int]ele, 0)
	for i, v := range nums {
		val, ok := eleMap[v]
		// 如果没有
		if !ok {
			val.start = i
		}
		val.count++
		val.end = i
		eleMap[v] = val
	}
	maxNum, minIdx := 0, math.MaxInt64
	for _, val := range eleMap {
		if val.count > maxNum {
			maxNum = val.count
			minIdx = val.end - val.start + 1
		} else if val.count == maxNum {
			minIdx = min(minIdx, val.end-val.start+1)
		}
	}
	return minIdx
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
