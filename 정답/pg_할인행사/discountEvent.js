function solution(want, number, discount) {
    let answer = 0;
    let start = 0;
    let gradients = 0;

    while(start <= discount.length - 10 ) {
        want.forEach( (w, idx) => {
           if(!(discount.slice(start, start + 10).filter(d => d === w).length === number[idx])) {
                return false;
           }
           gradients++;
        })
        answer = gradients === want.length ? answer + 1 : answer;
        start++;
        gradients = 0;
    }
    return answer;
}

solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
)

/**
 * 바나나 3
 * 사과 2
 * 쌀 2
 * 돼지 2
 * 냄비 1
 */

/**
 * 치킨 사과 사과 바나나 쌀 사과 돼지고기 바나나 돼지고기 쌀 냄지 바나나 사과 바나나
 */

/**
 * 시작날: start, 끝나는 날: start + 9
 */

//discount [start, start + 1]에서 찾으면 pass
//못 찾으면 break; start++;