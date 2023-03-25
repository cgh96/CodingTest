function isPrime(num) {
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    let prime = 0;

    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i+1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                prime = nums[i] + nums[j] + nums[k];
                if(isPrime(prime)) {
                    answer++;
                }
            }
        }
    }
    return answer;
}

solution([1,2,3,4]);


//1 2 3
//1 2 4
//1 3 4
//2 3 4

//1.소수인지 판별  2~루트N까지의 수로 나눠본다.
//2.소수 & 배열에 없는 수라면 push
//3.배열 길이 반환


//      1
//2     3     4
//3 4   3 4   3 4