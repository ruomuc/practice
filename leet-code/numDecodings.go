package main

func numDecodings(s string) int {
	n := len(s)
	if s[0]-'0' == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}
	// 初始化第一位和第二位
	p1 := 1
	p2 := 0
	if (s[1]-'0') >= 1 && (s[1]-'0') <= 26 {
		p2++
	}
	if (s[0]-'0')*10+(s[1]-'0') <= 26 {
		p2++
	}
	// 遍历，更新状态
	for i := 2; i < n; i++ {
		cur := 0
		if (s[i]-'0') >= 1 && (s[i]-'0') <= 26 {
			cur += p2
		}
		if (s[i-1]-'0')*10+(s[i]-'0') >= 10 && (s[i-1]-'0')*10+(s[i]-'0') <= 26 {
			cur += p1
		}
		p1, p2 = p2, cur
	}
	return p2
}
