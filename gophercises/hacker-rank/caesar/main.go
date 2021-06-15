package main

import (
	"fmt"
)

func main() {
	var length, delta int
	var input string
	fmt.Scanf("%d\n", &length)
	fmt.Scanf("%s\n", &input)
	fmt.Scanf("%d\n", &delta)

	ans := make([]rune, 0)
	for _, ch := range input {
		ans = append(ans, cipher(ch, delta))
	}
	fmt.Println(string(ans))
}

func cipher(r rune, delta int) rune {
	if r >= 'A' && r <= 'Z' {
		return rotate(r, 'A', delta)
	}
	if r >= 'a' && r <= 'z' {
		return rotate(r, 'a', delta)
	}
	return r
}

func rotate(r rune, base, delta int) rune {
	temp := int(r) - base
	temp = (temp + delta) % 26
	return rune(temp + base)
}

//func rotate(s rune, delta int, key []rune) rune {
//	idx := strings.IndexRune(string(key), s)
//	if idx < 0 {
//		// not found
//		panic("idx < 0")
//	}
//	idx = (idx + delta) % len(key)
//	return key[idx]
//}
