function solution(array, commands) {
    const answer = [];
    for(let [i, j, k] of commands) {
        const sorted = array.slice(i-1, j).sort( (a, b) => a - b);
        answer.push(sorted[k - 1]);
    }

    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);

//commands요소 하나씩 꺼낸다.
//slice(i - 1, j)
//k번쨰 요소