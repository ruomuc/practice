package main

import (
	"math"
	"sort"
)

// Bits is
type Bits []int

// Len is
func (b Bits) Len() int { return len(b) }

// Swap is
func (b Bits) Swap(i, j int) { b[i], b[j] = b[j], b[i] }

// Less is
func (b Bits) Less(i, j int) bool {
	if bitCount(b[i]) < bitCount(b[j]) {
		return true
	} else if bitCount(b[i]) == bitCount(b[j]) {
		return b[i] < b[j]
	} else {
		return false
	}
}

func sortByBits(arr []int) []int {
	sort.Sort(Bits(arr))
	return arr
}

func bitCount(num int) int {
	count := 0
	for num != 0 {
		if num%2 == 1 {
			count++
		}
		num = int(math.Floor(float64(num / 2)))
	}
	return count
}
