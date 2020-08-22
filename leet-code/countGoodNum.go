package main

func numIdenticalPairs(nums []int) int {
	res := 0
	numMap := make(map[int]int)
	// 先把每个数出现的次数存入map
	for _, v := range nums {
		_, ok := numMap[v]
		if ok {
			numMap[v]++
		} else {
			numMap[v] = 1
		}
	}
	// 遍历map，统计好数对个数
	for _, v := range numMap {
		res += v * (v - 1) / 2
	}
	return res
}
