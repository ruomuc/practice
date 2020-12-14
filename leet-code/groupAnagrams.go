package main

import (
	"fmt"
	"strings"
)

func groupAnagrams(strs []string) [][]string {
	groupMap := make(map[string][]string)
	ans := make([][]string, 0)
	for _, v := range strs {
		temp := make([]int, 26)
		for _, r := range v {
			temp[r-'a']++
		}
		numberStr := arrayToString(temp, ",")

		if _, ok := groupMap[numberStr]; ok {
			groupMap[numberStr] = append(groupMap[numberStr], v)
		} else {
			temp := []string{v}
			groupMap[numberStr] = temp
		}
	}

	for _, v := range groupMap {
		ans = append(ans, v)
	}
	return ans
}

func arrayToString(a []int, delim string) string {
	return strings.Trim(strings.Replace(fmt.Sprint(a), " ", delim, -1), "[]")
	//return strings.Trim(strings.Join(strings.Split(fmt.Sprint(a), " "), delim), "[]")
	//return strings.Trim(strings.Join(strings.Fields(fmt.Sprint(a)), delim), "[]")
}
