package main

func isPossible(nums []int) bool {
	cMap := map[int]int{}
	tailMap := map[int]int{}
	for _, v := range nums {
		cMap[v]++
	}
	for _, v := range nums {
		if cMap[v] == 0 {
			continue
		} else if cMap[v] > 0 && tailMap[v-1] > 0 {
			cMap[v]--
			tailMap[v-1]--
			tailMap[v]++
		} else if cMap[v] > 0 && cMap[v+1] > 0 && cMap[v+2] > 0 {
			cMap[v]--
			cMap[v+1]--
			cMap[v+2]--
			tailMap[v+2]++
		} else {
			return false
		}
	}
	return true
}
