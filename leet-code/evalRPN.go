package main

import "strconv"

func evalRPN(tokens []string) int {
	res, _ := strconv.Atoi(tokens[0])
	stack := make([]string, 0)
	for _, t := range tokens {
		if t == "+" || t == "-" || t == "*" || t == "/" {
			// 如果是符号，出栈两个元素，做运算，将结果入栈
			n1, _ := strconv.Atoi(stack[len(stack)-2])
			n2, _ := strconv.Atoi(stack[len(stack)-1])
			switch t {
			case "+":
				res = n1 + n2
			case "-":
				res = n1 - n2
			case "*":
				res = n1 * n2
			case "/":
				res = n1 / n2
			}
			stack = stack[:len(stack)-2]
			// 结果入栈
			stack = append(stack, strconv.Itoa(res))
			continue
		}
		// 非运算符，直接入栈
		stack = append(stack, t)
	}
	return res
}
