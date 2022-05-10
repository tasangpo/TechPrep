/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    let needCrush = false;
    
    for (let r = 0; r < board.length; r++) {
        let start = 0;
        for (let c = 0; c < board[0].length; c++) {
            if (c - start >= 2) {
                const num1 = Math.abs(board[r][c]);
                const num2 = Math.abs(board[r][c - 1]);
                const num3 = Math.abs(board[r][c - 2]);
                
                if (num1 === num2 && num2 === num3 && num3 !== 0) {
                    board[r][c] = -num1;
                    board[r][c - 1] = -num2;
                    board[r][c - 2] = -num3;
                    needCrush = true;
                 }            
                start++;
            }
        }
    }
    
    for (let c = 0; c < board[0].length; c++) {
        let start = 0;
        for (let r = 0; r < board.length; r++) {
            if (r - start >= 2) {
                const num1 = Math.abs(board[r][c]);
                const num2 = Math.abs(board[r - 1][c]);
                const num3 = Math.abs(board[r - 2][c]);
                
                if (num1 === num2 && num2 === num3 && num3 !== 0)  {
                    board[r][c] = -num1;
                    board[r - 1][c] = -num2;
                    board[r - 2][c] = -num3;
                    needCrush = true;
                }
                
                start++;
            }
        }
    }
    
    for (let c = 0; c < board[0].length; c++) {
        let index = board.length - 1;
        for (let r = board.length - 1; r >= 0; r--) {
            if (board[r][c] > 0) {
                board[index][c] = board[r][c];
                index--;
            }
        }
        
        for (let r = index; r >= 0; r--) {
            board[r][c] = 0;
        }
    }
    
    
    
    
    
    return needCrush ? candyCrush(board) : board;
};