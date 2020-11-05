package main

func ladderLength(beginWord string, endWord string, wordList []string) int {
	wordSet := make(map[string]struct{})
	for _, s := range wordList {
		wordSet[s] = struct{}{}
	}

	if _, ok := wordSet[endWord]; !ok {
		return 0
	}

	var beginCount, endCount int
	beginQueue := make([]string, 0)
	endQueue := make([]string, 0)
	beginQueue = append(beginQueue, beginWord)
	endQueue = append(endQueue, endWord)
	beginVisited := make(map[string]struct{})
	endVisited := make(map[string]struct{})
	beginVisited[beginWord] = struct{}{}
	endVisited[endWord] = struct{}{}

	for len(beginQueue) > 0 && len(endQueue) > 0 {
		beginSize := len(beginQueue)

		beginCount++
		for i := 0; i < beginSize; i++ {
			curr := beginQueue[i]
			for word := range wordSet {
				if ok := canConvert(curr, word); !ok {
					continue
				}
				if _, ok := beginVisited[word]; ok {
					continue
				}
				if _, ok := endVisited[word]; ok {
					return beginCount + endCount + 1
				}
				beginVisited[word] = struct{}{}
				beginQueue = append(beginQueue, word)
			}
		}

		endSize := len(endQueue)
		endCount++
		for i := 0; i < endSize; i++ {
			curr := endQueue[i]
			for word := range wordSet {
				if ok := canConvert(curr, word); !ok {
					continue
				}
				if _, ok := endVisited[word]; ok {
					continue
				}
				if _, ok := beginVisited[word]; ok {
					return beginCount + endCount + 1
				}
				endVisited[word] = struct{}{}
				endQueue = append(endQueue, word)
			}
		}

		beginQueue = beginQueue[beginSize:]
		endQueue = endQueue[endSize:]

	}
	return 0
}

func canConvert(s1, s2 string) bool {
	var count int

	for i := range s1 {
		if s1[i] != s2[i] {
			count++
		}
	}

	return count == 1
}
