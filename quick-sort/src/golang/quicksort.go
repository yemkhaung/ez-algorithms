package main

import "fmt"

func quicksort(list []int) []int {
	if len(list) < 2 {
		return list
	}
	pivot := list[0]
	less := []int{}
	more := []int{}

	for _, i := range list[1:] {
		if i <= pivot {
			less = append(less, i)
		} else {
			more = append(more, i)
		}
	}
	less = append(quicksort(less), pivot)
	return append(less, quicksort(more)...)
}

func main() {
	testList := []int{3, 2, 0, 6, 4, 2, 12, 1, 56, -2}
	fmt.Println(quicksort(testList))
}
