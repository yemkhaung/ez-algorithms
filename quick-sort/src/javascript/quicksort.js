function quicksort(list) {
    if (list.length < 2) {
        return list;
    }
    const pivot = list.pop();
    const less = list.filter(x => x <= pivot);
    const more = list.filter(x => x > pivot);
    return quicksort(less).concat([pivot], quicksort(more));
}

const test_list = [3, 2, 0, 6, 4, 2, 12, 1, 56, -2];
console.log(quicksort(test_list));