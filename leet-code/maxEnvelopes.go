package main

import (
	"sort"
)

func maxEnvelopes(envelopes [][]int) int {
	sort.Slice(envelopes, func(i, j int) bool {
		if envelopes[i][0] == envelopes[j][0] {
			return envelopes[i][1] < envelopes[j][1]
		} else {
			return envelopes[i][0] < envelopes[j][0]
		}
	})
	x, y := 0, 0
	ans := 0
	for _, v := range envelopes {
		if v[0] > x && v[1] > y {
			ans++
			x = v[0]
			y = v[1]
		}
	}
	return ans
} 
