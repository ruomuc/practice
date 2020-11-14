package main

import "math"

func relativeSortArray(arr1 []int, arr2 []int) []int {
	maxV := math.MinInt64
	res := make([]int, 0)
	for _, v := range arr1 {
		if v > maxV {
			maxV = v
		}
	}

	countMap := make([]int, maxV+1)
	for _, v := range arr1 {
		countMap[v]++
	}

	for _, v := range arr2 {
		for j := 0; j < countMap[v]; j++ {
			res = append(res, v)
		}
		countMap[v] = 0
	}

	for i := range countMap {
		if countMap[i] <= 0 {
			continue
		}
		for j := 0; j < countMap[i]; j++ {
			res = append(res, i)
		}
	}
	return res
}
