function rotLeft(a, d) {
    let rotArr = [];
    d = d % a.length;
    let lastIndex = a.length - 1;
    a.forEach((el, i, array) => {
        let newIndex = (array.length + i - d) % array.length;
        rotArr[newIndex] = el;
    });
    return rotArr;
}

test_arr = [1,2,3,4,5];
console.log(rotLeft(test_arr, 2)); // 3 4 5 1 2
console.log(rotLeft(test_arr, 4)); // 5 1 2 3 4
console.log(rotLeft(test_arr, 9)); // 5 1 2 3 4