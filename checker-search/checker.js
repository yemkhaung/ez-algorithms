/**
 * Entry point of execution
 * @param {Board Array} B 
 */
function main(B) {
    // find index of pawn, 'O'
    let pawnRow = B.findIndex(x => x.indexOf('O') !== -1);
    let pawnCol = B[pawnRow].indexOf('O');
    
    return beatableStep({x: pawnRow, y: pawnCol}, B);
}

/**
 * Find out max beatable steps for 'O' from current position
 * @param pawnPos - [x,y] position of 'O'
 * @param board - board array
 */
function beatableStep(pawnPos, board) {
    // No more beatable moves
    if (pawnPos.x === 0 || pawnPos.x === 1) {
        return 0;
    }
    let beatCount = 0;
    let leftBeats = 0;
    let rightBeats = 0;
    
    // Available moves on LEFT side
    if (pawnPos.y !== 0 || pawnPos.y !== 1) {
        const upperLeft = board[pawnPos.x-1].charAt(pawnPos.y-1);
        const twoUpperLeft = board[pawnPos.x-2].charAt(pawnPos.y-2);
        
        // Found beatable move
        if (upperLeft === 'X' && twoUpperLeft === '.') {
            let newPos = {x: pawnPos.x-2, y: pawnPos.y-2};
            leftBeats = 1 + beatableStep(newPos, board);
        }
    }
    
    // Available moves on RIGHT side
    if ((pawnPos.y !== board.length-1) || (pawnPos.y !== board.length-2)) {
        const upperRight = board[pawnPos.x-1].charAt(pawnPos.y+1);
        const twoUpperRight = board[pawnPos.x-2].charAt(pawnPos.y+2);
        
        // Found beatable move
        if (upperRight === 'X' && twoUpperRight === '.') {
            let newPos = {x: pawnPos.x-2, y: pawnPos.y+2};
            rightBeats = 1 + beatableStep(newPos, board);
        }
    }
    
    return (leftBeats > rightBeats) ? leftBeats : rightBeats;
}

/**
 * Test Suite
 */
let test_1 = ['..X...', '......', '....X.', '.X....', '..X.X.', '...O..']; // output => 2
let test_0 = ['X....','.X...','..O..','...X.','.....']; // output => 0
console.log(main(test_1));
console.log(main(test_0));



