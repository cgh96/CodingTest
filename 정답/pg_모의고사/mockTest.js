function solution(answers) {
    let tester = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let answer = new Array(3).fill(0);
    let rank = [1];

    for(let i = 0; i < answers.length; i++) {
        if( tester[0][i % tester[0].length] === answers[i] ) {
            answer[0]++;
        }

        if( tester[1][i % tester[1].length] === answers[i]) {
            answer[1]++;
        }

        if( tester[2][i % tester[2].length] === answers[i]) {
            answer[2]++;
        }
    }

    for(let i = 1; i < answer.length; i++) {
        if(answer[0] < answer[i]) {
            rank = [];
            rank.push(i + 1);
            answer[0] = answer[i];
        } else if(answer[0] === answer[i]) {
            rank.push(i + 1);
        }
    }
    
    return rank;
}

solution([1, 3, 2, 4, 2]);