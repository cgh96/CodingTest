//N이 백만이면 O(N), O(NlogN)
// 큰 값이 나오면 이전 값은 전부 다 삭제
function solution(number, k) {
    let stack = [];
    let array = Array.from(number);
    let count = 0;

    for(const item of number) {
        while(count < k && stack[stack.length - 1] < item) {
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }

    while(count < k) {
        stack.pop();
        count += 1;
    }
    return console.log(stack.join(""));
}

solution("1231234", 3);