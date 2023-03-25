function solution(m, n, board) {
    let RotateBoard = new Array(n).fill().map(elem => elem = []);
    let check = new Array(n).fill().map(elem => elem = []);
    let removeCount = 0;
    board = board.map(elem => elem.split(""));

    for(let c of check) {
        for(let i = 0; i < m; i++) { c.push(false); }
    }

    for(let i = 0; i < n; i++) {
        for(let j = m - 1; j >= 0; j--) {
            RotateBoard[i].push(board[j][i]);
        }
    }
    while(true) {
        for(let i = 0; i < RotateBoard.length - 1; i++) {
            for(let j = 0; j < RotateBoard[i].length - 1; j++) {
                if(RotateBoard[i][j] === RotateBoard[i][j+1] &&
                   RotateBoard[i][j] === RotateBoard[i+1][j+1] &&
                   RotateBoard[i][j] === RotateBoard[i+1][j]) {
                    check[i][j] = true;
                    check[i][j+1] = true;
                    check[i+1][j+1] = true;
                    check[i+1][j] = true;
                }
            }
        }
        let tmpCount = 0;
        for(let i = 0; i < RotateBoard.length; i++) {
            let trueArray = [];
            trueArray = FindtrueIndex(check[i]);
            tmpCount += trueArray.length;
            removeCount += trueArray.length;
            removeTrueElem([...trueArray], RotateBoard[i]);
            removeTrueElem([...trueArray], check[i]);
        }
        if(tmpCount === 0) { console.log(removeCount); return removeCount; }
    }
}

function FindtrueIndex (check) {
    let trueIndexArray = [];
    check.forEach( (el, idx) => {
        if(el) {
            trueIndexArray.push(idx);
        }
    })
    return [...trueIndexArray];
}

function removeTrueElem (trueArr, RotateBoard) {
    while(trueArr.length > 0) {
        let index = trueArr.pop();
        RotateBoard.splice(index, 1);
    }
    return [...RotateBoard];
}

solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);


/**
 * 0 1 2 3 4 5
 0 T T T A N T
 1 R R F A C C
 2 R R R F C C
 3 T R R R A A
 4 T T M M M F
 5 T M M T T J
 */