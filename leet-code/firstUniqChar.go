package main

func firstUniqChar(s string) int {
	var dict [26]int
	for _,c := range s {
		dict[c-'a']++
	}
	for i,c := range s {
		if dict[c-'a'] <=1 {
			return i 
		}
	}
	return -1
}