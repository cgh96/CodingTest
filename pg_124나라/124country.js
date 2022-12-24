function solution(n) {
    let rest = 0;
    let answer = "";
   
    while( n >= 3) {
        rest = n % 3;
        n = Math.floor(n / 3);

        if(rest === 0) {
            answer = "4" + answer;
            n = n - 1;
        } else {
            answer = rest.toString() + answer;
        }
    }

    if(n > 0) {
        answer = n.toString() + answer;
    }
    return answer;
}

solution(10);

/**
15 / 3 = 5...0  110 => 14
4 /  3 = 1...1

12 / 3 = 4...0
3 / 3 = 1..0

13 / 3 = 4...1
4 / 3 = 1...1

10 / 3 = 3...1
3 / 3 = 1...0

3 / 3 = 1...0

 3의 배수 => (c-1)4
 
 */