function solution(left, right) {
    let answer = 0;
    let type = true;

    for(let num = left; num <= right; num++) {
        for(let i = 1; i * i <= num; i++) {
            if(i * i == num) {
                answer -= num;
                type = false;
                break;
            }
        }
        if(type == true) {
            answer += num;
        }
        type = true;
    }
    return answer;
}

solution(13, 17);

//약수가 홀수 => 제곱수 ex) 1, 4, 9, 16