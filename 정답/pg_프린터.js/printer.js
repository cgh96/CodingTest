function solution(priorities, location) {
    let count = 0;

    while(priorities.length > 0) {
        if( priorities.find(elem => elem > priorities[0]) ) {
            let tmp = priorities[0];
            priorities.splice(0, 1);
            priorities.push(tmp);
            if(location === 0) { location = priorities.length - 1; }
            else { location--; }
        } else {
            count++;
            if(location === 0) { break; }
            else { location--; }
            priorities.splice(0, 1);
        }
    }
    return count;
}

solution([1, 1, 9, 1, 1, 1], 0);
//가장 앞에 있는 문서 J
//if(중요도 > J) => J를 맨뒤로
//not J를 그냥 인쇄

//priorities[location] !== 0
// if J === priorities.length - 1     ==>  J = 0
//else  J