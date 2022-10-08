function solution(m, n, board) {
    let changeBoard = new Array(n).fill().map(elem => elem = []);
    let check = new Array(n).fill().map(elem => elem = []);
    let count = 0;
    let tmp = 0;
    for(let c of check) {
        for(let i = 0; i < m; i++) {
            c.push(false);
        }
    }
    
    board = board.map(elem => elem.split(""));

    for(let i = n - 1; i >= 0; i--) {
        for(let j = m - 1; j >= 0; j--) {
            changeBoard[i].push(board[j][i]);
        }
    }
    
    while(true) {
        for(let i = 0; i < changeBoard.length - 1; i++) {
            for(let j = 0; j < changeBoard[i].length - 1; j++) {
                if(changeBoard[i][j] === changeBoard[i][j+1] 
                    && changeBoard[i+1][j] === changeBoard[i+1][j+1]
                    && changeBoard[i][j+1] === changeBoard[i+1][j]) {
                    check[i][j] = true;
                    check[i][j+1] = true;
                    check[i+1][j] = true;
                    check[i+1][j+1] = true;
                }
            }
        }

        for(let i = 0; i < n; i++) {
            let trueNum = check[i].filter(el => el === true).length;
            tmp += trueNum;
            count += trueNum;
            changeBoard[i].splice(check[i].findIndex(el => el === true), trueNum);
            check[i] = check[i].map(elem => elem = false);
        }
        if(tmp === 0) { return count; }
        tmp = 0;
    }
}