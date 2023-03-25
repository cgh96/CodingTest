function solution(arr, divisor) {
    var answer = arr.filter(
        elem => elem % divisor === 0
    ).sort( (a, b) => a - b);
    return answer.length == 0 ? [-1] : answer;
}

solution([5, 9, 7, 10], 5);