# PROGRAMMERS_LV2_땅따먹기

## 첫 번째 풀이 (bruteForce by DFS) => RunTimeError
```
function solution(land) {
    let stack = new Array(land.length).fill().map(elem => elem = [false, false, false, false]);
    let answer = 0;

    function dfs(value, layer) {
        if(layer === land.length - 1) {
            value += Math.max(
                ...land[layer].filter( (e, idx) => 
                                    idx !== stack[layer - 1].findIndex(elem => elem === true) 
                                ) 
            );
            answer = answer < value ? value : answer;
            return answer;
        }

        for(let i = 0; i < 4; i++) {
            if(layer === 0) { value += land[layer][i]; stack[layer][i] = true;  }
            else {
               if( i === stack[layer - 1].findIndex(elem => elem === true) ) { continue; }
                value += land[layer][i];
            }
            dfs(value, layer + 1);
            value -= land[layer][i];
            stack[layer][i] = false;
        }
    }

    dfs(0, 0);

    return answer;
}
```

## 두번째 풀이 DP 
```
function solution(land) {
    for(let row = 1; row < land.length; row++) {
        for(let col = 0; col < 4; col++) {
            land[row][col] += Math.max(
                ...land[row - 1].slice(0, col),
                ...land[row - 1].slice(col + 1)
            )
        }
    }
    return Math.max(...land[land.length - 1]);
}
```