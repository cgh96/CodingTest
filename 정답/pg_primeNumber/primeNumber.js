function solution(n) {
    var answer = 0;
    const prime = [false, false, ...Array(n-1).fill(true)];

    for(let i = 2; i * i <= n; i++) {
        if(prime[i]) {
            for(let j = i*2; j <= n; j+=i) {
                prime[j] = false;
            }
        }
    }
    answer = prime.filter(Boolean).length;
    return answer;
}

solution(10);