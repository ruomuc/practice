package main

import (
	"fmt"
	"strings"
)

func main() {
	s
	var input string
	fmt.Scanf("%s\n", &input)
	fmt.Println("Input is", input)

	answer := 0
	for _, s := range input {
		str := string(s)
		if strings.ToUpper(str) == str {
			answer++
		}
	}
	fmt.Println(answer)
}
