package main

func nextPermutation(nums []int) {
	len := len(nums)
	i := len - 2
	for i >= 0 && nums[i] >= nums[i+1] {
		i--
	}

	if i >= 0 {
		j := len - 1
		for j >= 0 && nums[i] >= nums[j] {
			j--
		}
		nums[i], nums[j] = nums[j], nums[i]
	}
	nums = nextPermutationReverse(nums, i+1)
}

func nextPermutationReverse(nums []int, i int) []int {
	left, right := i, len(nums)-1

	for left < right {
		nums[left], nums[right] = nums[right], nums[left]
		left++
		right--
	}
	return nums
}
