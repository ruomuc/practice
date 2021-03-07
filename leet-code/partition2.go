package main

func partition2(s string) (ans [][]string) {

	n := len(s)

	var isPalindrome func(i, j int) bool
	isPalindrome = func(i, j int) bool {
		if i > j {
			return true
		}
		if s[i] == s[j] {
			return isPalindrome(i+1, j-1)
		}
		return false
	}

	splits := []string{}
	var dfs func(int)
	dfs = func(i int) {
		for j := i; j < n; j++ {
			if i == n {
				ans = append(ans, append([]string(nil), splits...))
				return
			}
			if isPalindrome(i, j) {
				splits = append(splits, s[i:j+1])
				dfs(j + 1)
				splits = splits[:len(splits)-1]
			}
		}
	}
	dfs(0)
	return
}

// 记忆化搜索缓存
func partition22(s string) (ans [][]string) {
	n := len(s)
	memo := make([][]int8, n)
	for i := range memo {
		memo[i] = make([]int8, n)
	}
	var isPalindrome func(i, j int) int8
	isPalindrome = func(i, j int) int8 {
		if i > j {
			return 1
		}
		if memo[i][j] != 0 {
			return memo[i][j]
		}
		memo[i][j] = -1
		if s[i] == s[j] {
			memo[i][j] = isPalindrome(i+1, j-1)
		}
		return memo[i][j]
	}

	splits := []string{}
	var dfs func(int)
	dfs = func(i int) {
		for j := i; j < n; j++ {
			if i == n {
				ans = append(ans, append([]string(nil), splits...))
				return
			}
			if isPalindrome(i, j) > 0 {
				splits = append(splits, s[i:j+1])
				dfs(j + 1)
				splits = splits[:len(splits)-1]
			}
		}
	}
	dfs(0)
	return
}
