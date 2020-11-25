package main

import (
	"strings"
)

func sortString(s string) string {
	if len(s) == 0 {
		return ""
	}
	var bucket [26]int
	res := make([]string, 0)
	for i := range s {
		bucket[s[i]-'a']++
	}

	for len(res) < len(s) {
		for i := 0; i <= 25; i++ {
			if bucket[i] <= 0 {
				continue
			}
			res = append(res, string(rune(i)+'a'))
			bucket[i]--
		}

		for i := 25; i >= 0; i-- {
			if bucket[i] <= 0 {
				continue
			}
			res = append(res, string(rune(i)+'a'))
			bucket[i]--
		}
	}
	return strings.Join(res, "")
}

func sortString2(s string) string {
	if len(s) == 0 {
		return ""
	}
	bucket := [26]int{}
	for _, v := range s {
		bucket[v-'a']++
	}

	res := strings.Builder{}
	for res.Len() < len(s) {
		for c := 'a'; c <= 'z'; c++ {
			if bucket[c-'a'] > 0 {
				res.WriteRune(c)
				bucket[c-'a']--
			}
		}

		for c := 'z'; c >= 'a'; c-- {
			if bucket[c-'a'] > 0 {
				res.WriteRune(c)
				bucket[c-'a']--
			}
		}
	}
	return res.String()
}
