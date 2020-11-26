package main

import (
	"fmt"
	"math"
	"sort"
)

func maximumGap(nums []int) int {
	m := len(nums)
	if m < 2 {
		return 0
	}
	sort.Slice(nums, func(a, b int) bool {
		return nums[a] < nums[b]
	})
	perfix := make([]int, m)
	for i := 1; i < m; i++ {
		perfix[i] = nums[i] - nums[i-1]
	}
	max := 0
	for _, v := range perfix {
		if v > max {
			max = v
		}
	}
	return max
}

// 桶排序
func maximumGap2(nums []int) int {
	m := len(nums)
	if m < 2 {
		return 0
	}
	// 计算桶的大小和数量
	min := mins(nums...)
	diff := maxs(nums...) - min
	bucketSize := max(1, diff/(m-1))
	bucketNum := diff/bucketSize + 1
	// 初始化桶
	bucket := make([][]int, bucketNum)
	for i := 0; i < bucketNum; i++ {
		temp := make([]int, 0)
		bucket = append(bucket, temp)
	}
	for _, v := range nums {
		idx := (v - min) / bucketSize
		bucket[idx] = append(bucket[idx], v)
	}
	fmt.Println(bucket, bucketNum, bucketSize, diff)

	res := 0
	preMax := 0
	for _, b := range bucket {
		if len(b) != 0 && preMax != 0 {
			res = max(res, mins(b...)-preMax)
		}
		if len(b) != 0 {
			preMax = maxs(b...)
		}
	}
	return res
}

func mins(a ...int) int {
	_, min := len(a), math.MaxInt64
	for _, v := range a {
		if v < min {
			min = v
		}
	}
	return min
}

func maxs(b ...int) int {
	_, max := len(b), -math.MaxInt64
	for _, v := range b {
		if v > max {
			max = v
		}
	}
	return max
}

// 题解的桶排序，为什么比我的快那么多。。。
// 好吧。原来题解的每个桶只存了最大值和最小值，这样比较的时候会少了很多计算。。。
type pair struct{ min, max int }

func maximumGap3(nums []int) (ans int) {
	n := len(nums)
	if n < 2 {
		return
	}

	minVal := mins(nums...)
	maxVal := maxs(nums...)
	d := max(1, (maxVal-minVal)/(n-1))
	bucketSize := (maxVal-minVal)/d + 1

	// 存储 (桶内最小值，桶内最大值) 对，(-1, -1) 表示该桶是空的
	buckets := make([]pair, bucketSize)
	for i := range buckets {
		buckets[i] = pair{-1, -1}
	}
	for _, v := range nums {
		bid := (v - minVal) / d
		if buckets[bid].min == -1 {
			buckets[bid].min = v
			buckets[bid].max = v
		} else {
			buckets[bid].min = min(buckets[bid].min, v)
			buckets[bid].max = max(buckets[bid].max, v)
		}
	}

	prev := -1
	for i, b := range buckets {
		if b.min == -1 {
			continue
		}
		if prev != -1 {
			ans = max(ans, b.min-buckets[prev].max)
		}
		prev = i
	}
	return
}
