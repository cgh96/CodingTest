function solution(s) {
    let answer = [];
    let zero = 0;
    let count = 0;
    
    while(s != "1") {
        let prevLength = s.length;
        s = s.replace(/0/g, "");
        zero += prevLength - s.length;
        s = Number(s.length).toString(2);
        count++;
    }
    answer.push(count);
    answer.push(zero);
    return answer;
}

solution("110010101001");