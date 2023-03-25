function solution(price, money, count) {
    let total = 0;

    for(let i = 1; i <= count; i++) {
        total += (price * i);
    }
    return total > money ? total - money : 0;
}

solution(3, 20, 4);

//3 + 3 X 2 + 3 X 3 + ... + 3 X count