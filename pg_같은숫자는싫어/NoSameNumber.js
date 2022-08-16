function solution(arr)
{
    const stack = [];

    for(let i = 0 ; i < arr.length; i++) {
        if(stack.length === 0) {
            stack.push(arr[i]);
            continue;
        }

        if(stack[stack.length - 1] === arr[i]) {
           continue;
        } else {
            stack.push(arr[i]);
        }
    }    
    console.log(stack);
    return stack;
}

solution([1,1,3,3,0,1,1]);

//0~9