function solution(N, stages) {
    let failureRate = [];
    let answer = [];
    
    for(let i = 1; i < N + 1; i ++ ) {
        const approachPeople = stages.filter(elem => elem >= i).length;
        const failurePeople = stages.filter(elem => elem === i).length;
        failureRate.push([i, failurePeople / approachPeople]);
    } 

    failureRate.sort( (a, b) => b[1] - a[1]).forEach(
        elem => answer.push(elem[0])
    );
    
    return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

//실패율 = 스테이이도달 & 실패 / 스테이지 도달

// N 전체 스테이지 개수
// stages 사용자가 현재 멈춰있는 스테이지

//1 ~ N
//실패율 : 현재스테이지인 유저수 / 현재 스테이지 이상 도달한 유저수