package main

import (
	"fmt"
	"strings"
)

func main() {
	var delta int
	var key, input string
	//fmt.Scanf("%s\n", key)
	fmt.Scanf("%s\n", &input)
	//fmt.Scanf("%d\n", delta)

	key = "abcdefghigklmnopqrstuvwxyz"
	capitalKey := "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
	delta = 2
	ans := make([]rune, 0)
	for _, ch := range input {
		switch {
		case strings.IndexRune(key, ch) >= 0:
			ans = append(ans, rotate(ch, delta, []rune(key)))
		case strings.IndexRune(capitalKey, ch) >= 0:
			ans = append(ans, rotate(ch, delta, []rune(capitalKey)))
		default:
			ans = append(ans, ch)
		}
	}
	fmt.Println(string(ans))
}

func rotate(s rune, delta int, key []rune) rune {
	idx := strings.IndexRune(string(key), s)
	if idx < 0 {
		// not found
		panic("idx < 0")
	}
	idx = (idx + delta) % len(key)
	return key[idx]
}
