function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let zero = 0;

    zero = lottos.filter(elem => elem === 0).length;

    for(let mine of lottos) {
        if( win_nums.find(elem => elem === mine) ) {
            count++;
        }
    }

    if(!count) {
        if(!zero) { answer.push(6); }
        else {
            answer.push(7-zero);
        }
        answer.push(6);

        return answer;
    }

    answer.push(7 - count - zero);
    answer.push(7 - count);
    return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);