function solution(clothes) {
   let table = new Map();
   let count = 1;
   
   clothes.forEach(elem => {
        let check = table.get(elem[1]);
        if(check) {
            check.push(elem[0]);
            table.set(elem[1], check);
        } else {
            table.set(elem[1], [ elem[0] ] );
        }
   })
   
   for(let cloth of table.values()) {
        count *= (cloth.length + 1);
   }
   return count - 1;
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);

//headgear A B none
//eyewear C none
//top D none
//botttom E F none