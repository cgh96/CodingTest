function solution(s) {
    let stack = [];
    s = s.split("");
    stack.push(s[0]);
    
    for(let i = 1; i < s.length; i++) { s[i] == stack[stack.length - 1] ? stack.pop() : stack.push(s[i]); }
    return stack.length === 0 ? 1 : 0;
}

solution("baabaa");
//0 2 4 5 7 9
//1 3 6 8