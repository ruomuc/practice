package main

func canPlaceFlowers(flowerbed []int, n int) bool {
	count := 0
	prev := -1
	for i := range flowerbed {
		if flowerbed[i] == 1 {
			if prev < 0 {
				count += i / 2
			} else {
				count += (i - prev - 2) / 2
			}
			if count >= n {
				return true
			}
			prev = i
		}
	}

	if prev < 0 {
		count += (len(flowerbed) + 1) / 2
	} else {
		count += (len(flowerbed) - prev - 1) / 2
	}
	return count >= n
}
