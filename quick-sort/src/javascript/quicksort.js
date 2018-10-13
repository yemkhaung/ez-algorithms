function quicksort(list) {
    if (list.length < 2) {
        return list;
    }
    // pivot as last element (worst case)
    // const pivot = list.pop();

    // pivot as middle element (average case)
    const pivot = list.splice(list.length/2, 1)[0];

    const less = list.filter(x => x <= pivot);
    const more = list.filter(x => x > pivot);
    return quicksort(less).concat([pivot], quicksort(more));
}

const test_list = [3, 2, 0, 6, 4, 2, 12, 1, 56, -2];
console.log(quicksort(test_list));