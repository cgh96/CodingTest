function solution(n) {
    let count = 0;
    let check = true;

    for(let i = 2; i <= n; i++) {
        if(i == 2 || i == 3) { count++; continue; }

        for(let j = 2; j * j <= i; j++) {
            if(i % j == 0) {
                check = false;
                break;
            }
        }
        if(check) {
            count++;
        }
        check = true;
    }
    return count;
}

solution(10);