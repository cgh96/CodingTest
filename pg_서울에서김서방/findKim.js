function solution(seoul) {
    let location = seoul.findIndex(elem => elem === "Kim");
    let answer = `김서방은 ${location}에 있다`;
    return answer;
}

solution(["Jane", "Kim"]);