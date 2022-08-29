function solution(n) {
    let number = [];
    let answer = 0;
    while(n >= 3) {
        number.unshift(n % 3);
        n /= 3;
        n = Math.floor(n);
    }
    number.unshift(n);    
    number.forEach(
        (elem, idx) => {
           answer += (3 ** idx) * elem;
        }
    )
    return answer;
}

solution(125);

//toString([radix])
//radix : 특정 진법(2~36사이) ex)2진법, 8진법, 16진법...