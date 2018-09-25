#
# Sort an array of numbers using *QuickSort* algorithm
#
def quicksort(arr):
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[0]
        less = list(filter(lambda i: i <= pivot, arr[1:]))
        more = list(filter(lambda i: i > pivot, arr[1:]))
        return quicksort(less) + [pivot] + quicksort(more)

# Quick Sort execution
test_list = [3, 2, 0, 6, 4, 2, 12, 1, 56, -2]
print quicksort(test_list)