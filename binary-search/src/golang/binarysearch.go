package main

import "fmt"

func binarySearch(list []int, item int) bool {
	high := len(list) - 1
	low := 0
	for low <= high {
		mid := (low + high) / 2
		if list[mid] == item {
			return true
		} else if list[mid] > item {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return false
}

func main() {
	list := []int{1, 3, 5, 10, 11, 13, 15}
	fmt.Println(binarySearch(list, 5))
	fmt.Println(binarySearch(list, 12))
}
