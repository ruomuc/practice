package main

func reversePairs(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	var count int
	var mergerSort func(nums []int, count *int, left, right int)
	mergerSort = func(nums []int, count *int, left, right int) {
		// 结束条件
		if left == right {
			return
		}
		mid := left + (right-left)/2
		mergerSort(nums, count, left, mid)
		mergerSort(nums, count, mid+1, right)

		// 计数
		i, j := left, mid+1
		for i <= mid && j <= right {
			if nums[i] > 2*nums[j] {
				*count += mid - i + 1
				j++
			} else {
				i++
			}
		}

		tempArr := make([]int, right-left+1)
		idx, i, j := 0, left, mid+1
		for i <= mid && j <= right {
			if nums[i] < nums[j] {
				tempArr[idx] = nums[i]
				idx++
				i++
			} else {
				tempArr[idx] = nums[j]
				idx++
				j++
			}
		}

		for i <= mid {
			tempArr[idx] = nums[i]
			i++
			idx++
		}
		for j <= right {
			tempArr[idx] = nums[j]
			j++
			idx++
		}

		idx = 0
		for i := left; i <= right; i++ {
			nums[i] = tempArr[idx]
			idx++
		}
	}
	mergerSort(nums, &count, 0, len(nums)-1)
	return count
}
