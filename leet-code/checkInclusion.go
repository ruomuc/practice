package main

func checkInclusion(s1 string, s2 string) bool {
	n, m := len(s1), len(s2)
	if n > m {
		return false
	}
	var letterDict, letterDict2 [26]int
	// 统计s1每个字符出现的次数
	for i, c := range s1 {
		letterDict[c-'a']++
		letterDict2[s2[i]-'a']++
	}
	// go的数组可以直接比较相等。。
	if letterDict == letterDict2 {
		return true
	}
	// 遍历剩下的
	for i := n; i < m; i++ {
		letterDict2[s2[i]-'a']++
		letterDict2[s2[i-n]-'a']--
		if letterDict == letterDict2 {
			return true
		}
	}
	return false
}
