function solution(s){
    let arr = s.split("");
    let answer = true;
    let check = 0;

    while(arr.length > 0 && check >= 0) {
        if(arr.pop() === '(') {
            check--;
        } else {
            check++;
        }
    }

    if(check === 0) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}
solution("");