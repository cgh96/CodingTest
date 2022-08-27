function solution(nums) {
    let stack = [];

    for(let ponkemon of nums) {
        if(!stack.find(elem => elem == ponkemon) && stack.length < (nums.length / 2) ) {
            stack.push(ponkemon);
        }
    }
    return stack.length;
}


solution([3,3,3,2,2,4]);