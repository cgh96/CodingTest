function solution(s) {
        let answer = 0;
        const len = [];
        const result = new Array(s.length);
        
        for(let i=1; i<s.length/2+1; i++){
            let string = "";
            let last = 0;

            while(last < s.length){
                cnt = 1;
                while(s.slice(last, last + i) == s.slice(last+i, last+i+i)){
                    cnt++;
                    last+=i;
                }

                if(cnt > 1) string += cnt;

                string += s.slice(last, last+i);
                last += i;
            }
            len.push(string.length);
        }
       answer = Math.min(...len);
       return answer;
}

s="ababcdcdababcdcd";
console.log(solution(s));