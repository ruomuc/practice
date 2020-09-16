package main

func isValid(s string) bool {
	var stack []rune
	for _, val := range s {
		if val == '[' || val == '{' || val == '(' {
			stack = append(stack, val)
		}
		if val == ']' || val == '}' || val == ')' {
			// 如果进来的时候栈为空，也不对
			if len(stack) == 0 {
				return false
			}
			temp := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if (val == ']' && temp != '[') || (val == '}' && temp != '{') || (val == ')' && temp != '(') {
				return false
			}
		}
	}
	if len(stack) > 0 {
		return false
	}
	return true
}
