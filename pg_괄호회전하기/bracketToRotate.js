function check(arr) {
    let stack = [];
    for(let i of arr) {
        if( (stack[stack.length - 1] === "[" && i === "]")
        || (stack[stack.length - 1] === "{" && i === "}")
        || (stack[stack.length - 1] === "(" && i === ")")
        ) { 
            stack.pop(); 
        } else {
            stack.push(i);
        }
    }
    if(stack.length === 0) { return true; }
    return false;
}

function arrayShift(arr) {
    let str = arr[0];
    arr.splice(0, 1);
    arr.push(str);
    return [...arr];
}

function solution(s) {
   let count = 0;
   s = s.split("");
   
   for(let i = 0; i < s.length; i++) {
       if(check(s)) {
         count++;
       }
       s = arrayShift(s);
   }
   return count;
}

solution("[](){}")

//