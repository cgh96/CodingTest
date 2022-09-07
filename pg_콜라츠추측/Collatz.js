function solution(num) {
    let count = 0;
    if(num == 1) return  0;

    while(num > 1 && count < 500) {
        if(num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        count++;
    }

    if(count == 500) return -1;
    return count;
}

solution(626331);


//짝수 => 나누기 2
//홀수 => 곱하기 3, 더하기 1
// 결과로 나온수 반복