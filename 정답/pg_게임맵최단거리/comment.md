# pg_게임맵 최단거리 (BFS/DFS)
## DFS (CallStackOverflow...) 
DFS라고 써 있어서 DFS로 풀었더니 CallStackOverFlow로 효율성 테스트 다 실패... 당황스럽다.

```
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
```

## BFS로 풀어야 할 것 같다.
```
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
```