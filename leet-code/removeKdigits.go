package main

import "strings"

func removeKdigits(num string, k int) string {
	numlen := len(num)
	remains := numlen - k
	var stack []byte

	for i := range num {
		for k > 0 && len(stack) > 0 && stack[len(stack)-1] > num[i] {
			stack = stack[:len(stack)-1]
			k--
		}
		stack = append(stack, num[i])
	}
	stack = stack[0:remains]

	res := strings.TrimLeft(string(stack), "0")
	if res == "" {
		res = "0"
	}
	return res
}
