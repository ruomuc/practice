package main

import (
	"fmt"
	"strings"
)

func wordBreak(s string, wordDict []string) []string {
	wordSet := make(map[string]struct{})
	wordMap := make(map[int][][]string)
	res := make([]string, 0)
	for _, c := range wordDict {
		wordSet[c] = struct{}{}
	}

	var dfs func(s string, wordSet map[string]struct{}, index int, wordMap map[int][][]string) [][]string
	dfs = func(s string, wordSet map[string]struct{}, index int, wordMap map[int][][]string) [][]string {
		fmt.Println(111, wordSet)
		if _, has := wordMap[index]; has {
			return wordMap[index]
		}
		fmt.Println(222)

		wordBreaks := make([][]string, 0)
		if index == len(s) {
			var arr []string
			wordBreaks = append(wordBreaks, arr)
		}
		fmt.Println(333, len(s))

		for i := index + 1; i <= len(s); i++ {
			word := s[index:i]
			fmt.Println(444, s, i, word)
			if _, has := wordSet[word]; has {
				nextWordBreaks := dfs(s, wordSet, i, wordMap)
				for i := range nextWordBreaks {
					nextWordBreak := make([]string, 0)
					nextWordBreak = append(nextWordBreak, word)
					nextWordBreak = append(nextWordBreak, nextWordBreaks[i]...)
					wordBreaks = append(wordBreaks, nextWordBreak)
				}
			}
		}
		fmt.Println(555)

		wordMap[index] = wordBreaks
		return wordBreaks
	}
	wordBreaks := dfs(s, wordSet, 0, wordMap)
	for _, wordBreak := range wordBreaks {
		res = append(res, strings.Join(wordBreak, " "))
	}
	return res
}
