package main

import (
	"sort"
)

func longestCommonPrefix(strs []string) string {
	if strs == nil || len(strs) == 0 {
		return ""
	}
	sort.Strings(strs)
	firstStr := strs[0]
	lastStr := strs[len(strs)-1]

	var tempStr string
	for i, val := range firstStr {
		if val == rune(lastStr[i]) {
			tempStr += string(val)
		} else {
			break
		}
	}

	return tempStr
}
