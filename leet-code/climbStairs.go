package main

func climbStairs(n int) int {
	curr := 1
	p1 := 0
	p2 := 0
	for i := 0; i < n; i++ {
		p2 = p1
		p1 = curr
		curr = p1 + p2
	}
	return curr
}

// 超出时间限制
// func climbStairs(n int) int {
// 	if n < 0 {
// 		return 0
// 	} else if n == 0 {
// 		return 1
// 	} else {
// 		return climbStairs(n-1) + climbStairs(n-2)
// 	}
// }
