package main

import (
	"math"
	"strings"
)

func reorganizeString(S string) string {
	var dict [26]int
	l := len(S)
	res := make([]string, l+1)
	for i := range S {
		dict[S[i]-'a']++
	}

	// 找到最大值,判断能否重构
	_, max := len(dict), -math.MaxInt64
	for _, v := range dict {
		if v > max {
			max = v
		}
	}
	if max > (l+1)/2 {
		return ""
	}
	// 开始重构
	odd := 1
	even := 0
	halfC := l / 2
	for i := range dict {
		c := string(rune(i + 97))
		for dict[i] > 0 && dict[i] <= halfC && odd < l {
			res[odd] = c
			dict[i]--
			odd += 2
		}
		for dict[i] > 0 && even < l {
			res[even] = c
			dict[i]--
			even += 2
		}
	}
	return strings.Join(res, "")
}
