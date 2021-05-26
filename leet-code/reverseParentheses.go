package main

func reverseParentheses(s string) string {
	stack := make([][]byte, 0)
	str := make([]byte, 0)

	for i := range s {
		if s[i] == '(' {
			stack = append(stack, str)
			str = []byte{}
		} else if s[i] == ')' {
			for j, n := 0, len(str); j < n/2; j++ {
				str[j], str[n-j-1] = str[n-1-j], str[j]
			}
			// 拼接两个切片
			str = append(stack[len(stack)-1], str...)
			// 删除stack栈顶元素
			stack = stack[:len(stack)-1]
		} else {
			str = append(str, s[i])
		}
	}
	return string(str)
}
