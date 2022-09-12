function solution(s) {
    let answer = "";
    s = s
        .split(" ")
        .map(elem => Number(elem))
        .sort( (a, b) => a - b);

    answer =  s.shift().toString() + " " + s.pop().toString();

    return answer;
}

solution("-1 -2");