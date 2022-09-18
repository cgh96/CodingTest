function solution(brown, yellow) {
    let horizon = 0, vertical = 0;

    for(let i = yellow; i >= yellow / i; i--) {
        if(yellow % i == 0 && (yellow / i + i) * 2 + 4 === brown) {
            horizon = i + 2;
            vertical = yellow / i + 2;
            break;
        }
    }
    return [horizon, vertical];
}

solution(24, 24);
// 가로 X 2  +  세로 X 2  + 4 = brown 전체 칸 수
// 가로 길이 = yellow가로 + 2 // 세로 길이 = yellow세로 + 2
//24 1
//12 2
//8 3
//6 4