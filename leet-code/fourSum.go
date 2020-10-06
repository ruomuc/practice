package main

import "sort"

func fourSum(nums []int, target int) [][]int {
	res := make([][]int, 0)
	sort.Ints(nums)

	for i := 0; i < len(nums)-3; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		if nums[i]+nums[i+1]+nums[i+2]+nums[i+3] > target {
			break
		}

		if nums[i]+nums[len(nums)-3]+nums[len(nums)-2]+nums[len(nums)-1] < target {
			continue
		}

		for j := i + 1; j < len(nums)-2; j++ {
			left := j + 1
			right := len(nums) - 1
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}

			if nums[i]+nums[j]+nums[j+1]+nums[j+2] > target {
				break
			}

			if nums[i]+nums[j]+nums[len(nums)-2]+nums[len(nums)-1] < target {
				continue
			}

			for left < right {
				sum := nums[i] + nums[j] + nums[left] + nums[right]
				if sum == target {
					temp := []int{nums[i], nums[j], nums[left], nums[right]}

					res = append(res, temp)
					for left < right && nums[left] == nums[left+1] {
						left++
					}
					left++

					for left < right && nums[right] == nums[right-1] {
						right--
					}
					right--
				} else if sum < target {
					left++
				} else {
					right--
				}
			}
		}
	}
	return res
}
