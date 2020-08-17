package main

func toNumberSum(nums []int, target int) []int {
	numberMap := make(map[int]int)
	result := []int{}
	for index, value := range nums {
		remainder := target - value
		mValue, ok := numberMap[remainder]
		if ok {
			result = append(result, index)
			result = append(result, mValue)
			return result
		}
		numberMap[value] = index
	}
	return result
}
