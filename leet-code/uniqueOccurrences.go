package main

func uniqueOccurrences(arr []int) bool {
	nMap := make(map[int]int, 0)

	for _, v := range arr {
		if _, ok := nMap[v]; ok {
			nMap[v]++
		} else {
			nMap[v] = 1
		}
	}

	cMap := make(map[int]bool, 0)

	for _, v := range nMap {
		if _, ok := cMap[v]; ok {
			return false
		}
		cMap[v] = true
	}
	return true
}
