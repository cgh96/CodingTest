function solution(n) {
    const DIVISION_CONSTANT = 1000000007n;
    const answer = [];
    answer[0] = 1n;
    answer[1] = 2n;

    for(let i = 2; i < n; i++) {
        answer[i] = answer[i - 1] + answer[i - 2];
        if(answer[i] === DIVISION_CONSTANT) {
            answer[i] = 0;
        } else if(answer[i] > DIVISION_CONSTANT) {
            answer[i] -= DIVISION_CONSTANT;
        }
    }
    return answer[n - 1];
}

solution(4);

//2 X n

/**
 *  f(1) = 1
 *  f(2) = 2
 *  f(3) = 3
 *  f(4) = 5
 *  f(5) = 
 */