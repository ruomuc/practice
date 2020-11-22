package main

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	charMap := make([]int, 26)
	for _, v := range s {
		charMap[v-'a']++
	}
	for _, v := range t {
		charMap[v-'a']--
	}
	for _, v := range charMap {
		if v > 0 {
			return false
		}
	}
	return true
}
