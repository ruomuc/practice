package main

func candy(ratings []int) int {
	length:=len(ratings)
	childQueue := make([]int,length)
	for i:=range childQueue{
		childQueue[i] = 1
	}
	res:=0
	for i:=0; i<length-1; i++ {
		if ratings[i+1]>ratings[i] && childQueue[i+1]<=childQueue[i]{
			childQueue[i+1] = childQueue[i]+1
		}
	}
	for i:= length-2; i>=0;i--{
		if ratings[i]>ratings[i+1] && childQueue[i]<=childQueue[i+1]{
			childQueue[i] = childQueue[i+1]+1
		}
	}
	for _,v:=range childQueue{
  	res+=v
	}
	return res
}