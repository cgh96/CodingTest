function solution(k, dungeons) {
    let currentE = k;
    let count = [];
    let num = 0;
    for(let i = 0; i < dungeons.length; i++) {
        if(currentE >= dungeons[i][0]) {
            currentE -= dungeons[i][1];
            num++;
        }
    }
    count.push(num);
}

solution(80, [[80,20],[50,40],[30,10]]);
//최소 필요 피로도
//소모 피로도