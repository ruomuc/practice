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

// FIXME: [5,0,10,0,10,6]
func smallerNumbersThanCurrent2(nums []int) []int {
	var result = make([]int, len(nums))
	var tempArr = make([]int, len(nums))
	for i := range nums {
		tempArr[i] = nums[i]
	}

	quickSort(tempArr, 0, len(tempArr)-1)

	var tempMap = make(map[int]int)
	for i, val := range tempArr {
		if _, ok := tempMap[val]; !ok {
			tempMap[val] = i
		}
	}
	for i, val := range nums {
		result[i] = tempMap[val]

	}
	return result
}

func quickSort(arr []int, left int, right int) {
	if left >= right {
		return
	}
	var i, j int
	i = left
	j = right
	flag := arr[left]

	for i < j {
		for flag <= arr[j] && i < j {
			j--
		}
		for flag >= arr[j] && i < j {
			i++
		}
		// 交换位置
		temp := arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	arr[left] = arr[i]
	arr[i] = flag
	quickSort(arr, left, j-1)
	quickSort(arr, j+1, right)
}
