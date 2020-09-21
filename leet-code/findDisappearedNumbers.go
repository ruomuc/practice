package main

func findDisappearedNumbers(nums []int) []int {
	result := make([]int, 0)
	for i := range nums {
		val := nums[i]
		if val < 0 {
			val = -val
		}
		if nums[val-1] > 0 {
			nums[val-1] = -nums[val-1]
		}
	}

	for i, val := range nums {
		if val > 0 {
			result = append(result, i+1)
		}
	}
	return result
}

func findDisappearedNumbers2(nums []int) []int {
	result := make([]int, 0)
	resMap := make(map[int]bool)

	for _, val := range nums {
		resMap[val] = true
	}

	for i := 1; i <= len(nums); i++ {
		if i == 0 {
			continue
		}
		if _, ok := resMap[i]; !ok {
			result = append(result, i)
		}
	}
	return result
}
