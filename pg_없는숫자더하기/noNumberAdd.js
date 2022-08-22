function solution(numbers) {
    let answer = 0;
    numbers.sort( (a, b) => a - b );

   for(let i = 0; i < 10; i++) {
        if( !numbers.find(elem => elem === i) ) {
            answer += i;
        }
   }
   return answer;
}

solution([1,2,3,4,6,7,8,0]);