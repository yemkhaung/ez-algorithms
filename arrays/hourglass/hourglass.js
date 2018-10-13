function hourglassSum(arr) {
    let hgSumArr = [];
    for (let i =0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            let hgArr = checkHourglass(i, j, arr);
            if (hgArr.length > 0) {
                let tempSum = calSumHg(hgArr);
                hgSumArr.push(tempSum);
                console.log(`{i,j,tempSum} => ${i},${j},${tempSum}`);
            }
        }
    }
    let maxSum = hgSumArr.reduce((acc, cur) => (cur > acc) ? cur : acc);
    return maxSum;
}

function checkHourglass(i, j, twoDArr) {
    let validI = (i > 0) && (i < twoDArr.length-1);
    let validJ = (j > 0) && (j < twoDArr.length-1);
    let hgArr = [];
    if (validI && validJ) {
        hgArr.push(twoDArr[i-1][j-1], twoDArr[i-1][j], twoDArr[i-1][j+1]
            , twoDArr[i][j]
            , twoDArr[i+1][j-1], twoDArr[i+1][j], twoDArr[i+1][j+1]);
    }
    return hgArr;
}

function calSumHg(hgArr) {
    return hgArr.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
}

// test_arr = [[1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0]];
// test_arr = [[-9, -9, -9, 1, 1, 1],
//     [0, -9, 0, 4, 3, 2],
//     [-9, -9, -9, 1, 2, 3],
//     [0, 0, 8, 6, 6, 0],
//     [0, 0, 0, -2, 0, 0],
//     [0, 0, 1, 2, 4, 0]];
test_arr = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
];
console.log(hourglassSum(test_arr));