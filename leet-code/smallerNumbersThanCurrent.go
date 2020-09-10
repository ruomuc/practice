package main

func smallerNumbersThanCurrent(nums []int) []int {
	var statistics [2][101]int
	for _, num := range nums {
		statistics[0][num]++
	}
	for i := 1; i < len(statistics[1]); i++ {
		statistics[1][i] = statistics[0][i-1] + statistics[1][i-1]
	}

	for i := range nums {
		nums[i] = statistics[1][nums[i]]
	}
	return nums
}

func smallerNumbersThanCurrent2(nums []int) []int {
	var tempArr []int
	tempArr = nums
	quickSort(tempArr, 0, len(tempArr)-1)

	var tempMap = make(map[int]int)
	for i, val := range tempArr {
		if
	}
}

func quickSort(arr []int, left int, right int) {
	
}
