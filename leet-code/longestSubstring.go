package main

func longestSubstring(s string, k int) int {
	ans, n := 0, len(s)
	for i := 1; i <= 26; i++ {
		letterCount := make([]int, 26)
		left := 0
		// total 区间内字符种类
		// less 不满足k个的字符种类
		total, less := 0, 0
		for right := 0; right < n; right++ {
			curr := s[right] - 'a'
			if (letterCount[curr]) == 0 {
				total++
				less++
			}
			letterCount[curr]++
			if letterCount[curr] == k {
				less--
			}
			for total > i {
				curr := s[left] - 'a'
				if letterCount[curr] == k {
					less++
				}
				letterCount[curr]--
				if letterCount[curr] == 0 {
					total--
					less--
				}
				left++
			}

			if less == 0 {
				ans = max(ans, right-left+1)
			}
		}
	}

	return ans
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
