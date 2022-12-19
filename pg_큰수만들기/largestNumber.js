function solution(number, k) {
    let stack = [];

    stack.push(number[0]);

    for(let i = 1; i < number.length; i++) {
        while(k > 0 && stack[stack.length - 1] < number[i]) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }

    if(k > 0) {
        stack.splice(stack.length - k);
    }
    return stack.join("");
}

solution("4177252841", 4);

/**
 * 1111111;
 * 9876
 */