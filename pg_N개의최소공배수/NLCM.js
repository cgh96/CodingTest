function getGCD (a, b) {
   if(b % a === 0) { return a; }
    b %= a;
    return getGCD(b, a);
}

function getLCM (a, b) {
    return a * b / getGCD(a, b);
}

function solution(arr) {
   let index = 0;
   arr = arr.sort( (a, b) => a - b);

   while(index < arr.length - 1) {
        arr[index + 1] = getLCM(arr[index] , arr[index + 1]);
        console.log(arr[index + 1]);
        index++;
   }
   return arr[index];
}

solution([2, 6, 8, 14]);