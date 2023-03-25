function solution(n) {
    let arr = [1n, 1n, 2n];
    for(let i = 3; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n] % 1234567n;
}
solution(1000);

//1   1
//2   2
//3   3
//4   5
//5   8