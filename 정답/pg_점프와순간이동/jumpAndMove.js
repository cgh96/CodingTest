function solution(n) {
    let battery = 0;
    while(n >= 1) {
        if(n % 2 === 1) { n = n - 1; battery++; }
        else{ n = n / 2; }
    }
    return battery;
}

solution(5);

//K칸 점프 (K만큼 건전지 소모)
//현재 온 거리 X 2 순간이동 (건전지 소모 X)

//점프 최소화

//n = 1   battery = 1  f(1)
//n = 2   battery = 1  f(2)
//n = 3   battery = 2  f(3)  = f(1) + f(2)
//n = 4   battery = 1  f(4)  = f(2)
//n = 5   battery = 2  f(5) = f(4) + f(1)
//n = 6   battery = 2  f(6)  = f(3)

//5000  2500   1250  625
//624   312  