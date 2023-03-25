function solution(progresses, speeds) {
    const COMPLETE = 100;
    let answer = [];
    let count = 1;
    let standard;

    progresses = progresses.map( (elem, index) => elem = Math.ceil( (COMPLETE - elem) / speeds[index] ) )
    standard = progresses[0];

    for(let i = 1; i < progresses.length; i++) {
        if(standard >= progresses[i]) { count++; }
        else {
            standard = progresses[i];
            answer.push(count);
            count = 1;
        }
    }

    count > 0 ? answer.push(count) : 0;

    return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);

//5 10 1 1 20 1
//2 2 2 4 4 1
//stack A B