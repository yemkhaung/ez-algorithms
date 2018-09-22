#
# Binary Search (Python)
# 
# @params
#   list - list of elements
#   item - item to search for in the list
# @return - index/position of item in list if found
# 
def binary_search(list, item):
    # to keep track of low and high ends of the list
    low = 0
    high = len(list) - 1

    while low <= high:
        # check the middle item as a guess
        mid = (low + high) / 2
        guess = list[mid]
        # found the item
        if guess == item:
            return mid
        # guess is too high
        if guess > item:
            high = mid - 1
        # guess is too low
        else:
            low = mid + 1
    
    # item is not found
    return None

test_list = [1, 3, 5, 7, 9]
print binary_search(test_list, 3) # returns 1
print binary_search(test_list, -1) # returns "None"