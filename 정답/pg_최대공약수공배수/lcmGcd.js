function solution(n, m) {
    let answer = [];
    let max = Math.max(n, m);
    let min = Math.min(n, m);

    for(let i = min; i >= 1; i--) {
        if(max % i === 0 && min % i === 0) {
            answer.push(i);
            break;
        }
    }

    answer.push( Math.floor(max*min / answer[0]) );
    return answer;
    
}

solution(12, 3);