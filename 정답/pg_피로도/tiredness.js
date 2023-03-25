function solution(k, dungeons) {
    const length = dungeons.length;
    const visited = new Array(length).fill(false);

    let answer = 0;

    function dfs(count, k) {
        answer = answer < count ? count : answer;
    
        for (let i = 0; i < dungeons.length; i++) {
            let current = dungeons[i];
            if(k >= current[0] && !visited[i]) {
                visited[i] = true;
                dfs(count + 1, k - current[1]);
                visited[i] = false;
            }
        }
    }
    dfs(0, k);
    return answer;
}




solution(80, [[80,20],[50,40],[30,10]]);
//최소 필요 피로도
//소모 피로도
//true false false false true true false
/**
 90
80 30
50 20
30 20
 */