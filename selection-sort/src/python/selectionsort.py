#
# Sort the items in array using Selection Sort algorithm
#
def selectionSort(arr):
    sorted_list = []
    # until all item in origin list are removed
    # and added to sorted list
    while len(arr) > 0:
        result = findSmallest(arr)
        sorted_list.append(result)
        # delete smallest item from list
        # since it is unnecessary for next iteration 
        arr.remove(result)
    
    return sorted_list

# 
# Find out the smallest item in given array
#
def findSmallest(arr):
    # temporarily stores the smallest value
    smallest = arr[0]
    
    for item in arr:
        if item < smallest:
            smallest = item

    return smallest

# Selection Sort execution
test_list = [3, 2, 0, 6, 4, 2, 12, 1, 56, -2]
print selectionSort(test_list)