function solution(numbers) {
    let list = [];

    numbers = numbers.split("");

    const isPrimeNumber = (num) => {
        const nums = Number(num);
        for(let i = 2; i * i <= nums; i++) {
            if(nums % i === 0) { return false; }
        }
        return true;
    }


    const getPermutation = (numbers, fixed) => {
        if(numbers.length === 0) return;

        for(let i = 0; i < numbers.length; i++) {
            if( 
                isPrimeNumber(fixed + numbers[i]) && 
                !list.find(elem => elem === Number(fixed + numbers[i])) &&
                Number(fixed + numbers[i]) > 1
            ) {
                list.push(Number(fixed + numbers[i]));
            }
            const subArray = [...numbers];
            subArray.splice(i, 1);
            getPermutation(subArray, fixed + numbers[i]);
        }
    }

    getPermutation(numbers, "");
    return list.length;
}

solution("011")
/**
 * 1 7 3 1
 * 1 1 3 7 
 * 
 * 
 * 1 => 7 3 1
 * 7
 * 3
 * 1
 * 
 * 숫자 한개씩 분리
 * 소수인지 체크 & 리스트에 있는지 체크
 * 해당 숫자 제외한 numbers배열
 */