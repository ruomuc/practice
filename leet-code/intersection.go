package main

import "fmt"

func intersection(nums1 []int, nums2 []int) []int {
	nMap := make(map[int]int, 0)
	res := make([]int, 0)
	if len(nums1) == 0 || len(nums2) == 0 {
		return res
	}

	for _, v := range nums1 {
		nMap[v] = 1
	}
	fmt.Printf("map=%#v", nMap)
	for _, v := range nums2 {
		if _, has := nMap[v]; has {
			nMap[v]++
		}
	}
	fmt.Printf("map=%#v", nMap)

	for key, val := range nMap {
		if val > 1 {
			res = append(res, key)
		}
	}
	return res
}
