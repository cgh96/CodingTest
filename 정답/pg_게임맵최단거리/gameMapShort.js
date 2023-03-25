function solution(maps) {
    let queue = [];
    const ROW_END = maps.length - 1;
    const COL_END = maps[0].length - 1;
    let col = 0;
    let row = 0;
    let cost = 1;

    queue.push([row, col, cost]);
    maps[0][0] = 0;

    while(queue.length !== 0) {
        row = queue[0][0];
        col = queue[0][1];
        cost = queue[0][2];
        queue.splice(0, 1);

        if(row === ROW_END && col === COL_END) return cost;

        if(row < ROW_END) {
            if(maps[row + 1][col]) { 
                queue.push([row + 1, col, 1 + cost]);
                maps[row + 1][col] = 0;
            }
        }
        if(col < COL_END) {
            if(maps[row][col + 1]) { 
                queue.push([row, col + 1, 1 + cost]);
                maps[row][col + 1] = 0;
            }
        }
        if(row > 0) {
            if(maps[row - 1][col]) { 
                queue.push([row - 1, col, 1 + cost]); 
                maps[row - 1][col] = 0;
            }
        }
        if(col > 0) {
            if(maps[row][col - 1]) {
                queue.push([row, col - 1, 1 + cost]); 
                maps[row][col - 1] = 0;
            }
        }
    }
    return -1;
}

solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]);