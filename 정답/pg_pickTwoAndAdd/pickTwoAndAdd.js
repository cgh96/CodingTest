function solution(numbers) {
    var answer = [];
    let sorted = [];

    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = 1 + i; j < numbers.length; j++) {
            if(!sorted.includes(numbers[i] + numbers[j])) {
                sorted.push(numbers[i] + numbers[j]);
            }
        }
    }

    sorted.sort((b, a) => b - a);
    answer = sorted;
    return answer;
}

solution([2,1,3,4,1]);