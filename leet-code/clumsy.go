package main

func clumsy(N int) (ans int) {
	stack := []int{N}
	idx := 0
	for N--; N > 0; N-- {
		switch idx % 4 {
		case 0:
			stack[len(stack)-1] *= N
		case 1:
			stack[len(stack)-1] /= N
		case 2:
			stack = append(stack, N)
		default:
			stack = append(stack, -N)
		}
		idx++
	}

	for i := range stack {
		ans += stack[i]
	}
	return ans
}
