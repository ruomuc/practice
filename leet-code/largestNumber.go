package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

func largestNumber(nums []int) string {
	sort.Slice(nums, func(i, j int) bool {
		si, sj := strconv.Itoa(nums[i]), strconv.Itoa(nums[j])
		ii, _ := strconv.Atoi(si + sj)
		ij, _ := strconv.Atoi(sj + si)
		fmt.Println(ii, ij)
		return ii > ij
	})
	fmt.Println(nums)
	if nums[0] == 0 {
		return "0"
	}
	arr := make([]string, 0)
	for _, n := range nums {
		s := strconv.Itoa(n)
		arr = append(arr, s)
	}
	return strings.Join(arr, "")
}
