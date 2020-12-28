package main

import (
	"math"
)

// 最小值
func canCompleteCircuit(gas []int, cost []int) int {
	var sq, minIdx int
	minSq := math.MaxInt64
	for i, v := range gas {
		sq += v - cost[i]
		if sq < minSq {
			minSq = sq
			minIdx = i
		}
	}
	if sq < 0 {
		return -1
	}
	return (minIdx + 1) % len(gas)
}

// 前缀和
func canCompleteCircuit2(gas []int, cost []int) int {
	preSum := make([]int, 0)
	sum := 0
	for i := range gas {
		sum += gas[i] - cost[i]
		preSum = append(preSum, sum)
	}

	if sum < 0 {
		return -1
	}

	min := math.MaxInt64
	minIdx := math.MaxInt64
	for i, v := range preSum {
		if v < min {
			min = v
			minIdx = i
		}
	}
	return (minIdx + 1) % len(gas)
}

// 指针遍历

func canCompleteCircuit3(gas []int, cost []int) int {
	n := len(gas)
	i := 0
	for i < n {
		var sumGas, sumCost int
		curr := 0
		for curr < n {
			j := (curr + i) % n
			sumGas += gas[j]
			sumCost += cost[j]
			if sumCost > sumGas {
				break
			}
			curr++
		}
		if curr == n {
			// 如果走完了，返回i
			return i
		}
		// 如果没走完，那么在i~curr这段中任意起点都走不完。所以i放到curr+1位置
		i = i + curr + 1
	}
	return -1
}
