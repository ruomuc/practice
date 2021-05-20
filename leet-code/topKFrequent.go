package main

import "sort"

func topKFrequent(words []string, k int) []string {
	dict := make(map[string]int, 0)
	uniqueWords := make([]string, 0)
	for _, w := range words {
		if _, exist := dict[w]; exist {
			dict[w]++
		} else {
			dict[w] = 1
			uniqueWords = append(uniqueWords, w)
		}
	}
	sort.Slice(uniqueWords, func(i, j int) bool {
		a, b := uniqueWords[i], uniqueWords[j]
		return dict[a] > dict[b] || dict[a] == dict[b] && a < b
	})
	return uniqueWords[:k]
}
