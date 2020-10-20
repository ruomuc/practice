package main

func backspaceCompare(S string, T string) bool {
	var back func(str string) string
	back = func(str string) string {
		stack := make([]rune, 0)
		for i, v := range str {
			if str[i] == '#' {
				if len(stack) == 0 {
					continue
				}
				stack = stack[:len(stack)-1]
				continue
			}
			stack = append(stack, v)
		}
		return string(stack)
	}

	return back(S) == back(T)
}
