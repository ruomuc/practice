package main

import "fmt"

func main() {
	// 两数之和
	nums := []int{1, 2, 3, 5, 6}
	targer := 7
	result1 := toNumberSum(nums, targer)
	fmt.Println("两数之和", result1)
}
