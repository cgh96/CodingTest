function solution(n) {
    let check = 0;
    let answer = 1;
    for(let i = 1; i < n / 2; i++) {
        for(let j = i; j < n; j++) {
            check += j;
            if(check == n) { check = 0; answer++; break; }
            if(check > n) {  check = 0; break; }
        }
    }
    return answer;
}

solution(15);

//1 + 2 + 3 + 4 + 5
// 