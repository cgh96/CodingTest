function solution(board, moves) {
    let explosion = 0;
    let stack = [];
    moves = moves.map(elem => elem - 1);

    for(let num of moves) {
        for(let doll of board) {
            if ( doll[num] !== 0 ) {
                if(stack.length > 0) {
                    if(stack[stack.length - 1] === doll[num]) {
                        explosion += 2;
                        stack.pop();
                    } else {
                        stack.push(doll[num]);
                    }
                    doll[num] = 0;
                    break;
                }
                if(stack.length === 0) {
                    stack.push(doll[num]);
                    doll[num] = 0;
                    break;
                }
            }
        }
    }
    return explosion;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);

//바구니 같은 인형 두개 터짐
//아무것도 없는 곳에 크레인 작동 시, nothing
//board 5X5 30X30

//1. board[num - 1] 체크
//2. board.pop() === 0 이면 pass
//3. board.pop() !== 0