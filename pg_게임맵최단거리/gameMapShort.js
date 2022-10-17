function solution(maps) {
    let dist = 25;
    let distMaps = new Array(maps.length).fill().map(elem => new Array(maps[0].length).fill(0) );
    distMaps[0][0] = 1;
    const ROW_END = maps.length - 1;
    const COL_END = maps[0].length - 1;


    function DFS(row, col, count) {
        if(row === ROW_END && col === COL_END) {
            dist = count < dist ? count : dist;
        }

        if(row < ROW_END) {
            if(maps[row + 1][col] && (distMaps[row + 1][col] === 0 || distMaps[row + 1][col] > count + 1)) { 
                distMaps[row + 1][col] = count + 1;
                DFS(row + 1, col, count + 1);
            }
        }
        
        if(col < COL_END) {
            if(maps[row][col + 1] && (distMaps[row][col + 1] === 0 || distMaps[row][col + 1] > count + 1)) { 
                distMaps[row][col + 1] = count + 1;
                DFS(row, col + 1, count + 1); 
            }
        }
       
        if(row > 0) {
            if(maps[row - 1][col] && (distMaps[row - 1][col] === 0 || distMaps[row - 1][col] > count + 1)) { 
                distMaps[row - 1][col] = count + 1;
                DFS(row - 1, col, count + 1); 
            } 
        }
        if(col > 0) {
            if(maps[row][col - 1] && (distMaps[row][col - 1] === 0 || distMaps[row][col - 1] > count + 1)) { 
                distMaps[row][col - 1] = count + 1;
                DFS(row, col - 1, count + 1); 
            }
        }
        
    }

    DFS(0, 0, 1);
    return dist === 25 ? -1 : dist;
}

solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,1,0],[0,0,0,1,1]]);


/**  0 1 2 3 4 
 *       
0    1 0 1 1 1
1    1 0 1 0 1
2    1 0 1 1 1
3    1 1 1 0 1
4    0 0 0 0 1

 */