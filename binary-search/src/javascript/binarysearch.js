const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = ~~((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            return true;
        }
        if (guess < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

const binarySearchRecursive = (list, item) => {
    let low = 0;
    let high = list.length - 1;
    
    if (low > high) return false;
    
    let mid = ~~((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
        return true;
    }
    if (guess > item) {
        return binarySearchRecursive(list.slice(low, mid), item);
    } else {
        return binarySearchRecursive(list.slice(mid + 1), item);
    }
}

searchList = [1, 3, 5, 7, 9, 12, 14];
console.log(binarySearch(searchList, 12));
console.log(binarySearch(searchList, -1));
console.log(binarySearchRecursive(searchList, 9));