function solution(survey, choices) {
   let index = new Map([
        [ 'R', { point: 0 } ],
        [ 'T', { point: 0 } ],
        [ 'C', { point: 0 } ],
        [ 'F', { point: 0 } ],
        [ 'J', { point: 0 } ],
        [ 'M', { point: 0 } ],
        [ 'A', { point: 0 } ],
        [ 'N', { point: 0 } ],
    ]);

    let points = 0;
    let type;
    let answer = [];


   for(let i = 0; i < survey.length; i++) {
        points = choices[i] - 4;
        if(points < 0) {
            type = index.get(survey[i][0]);
            type.point -= points;
            index.set(survey[i][0], type);
        } 

        if(points > 0) {
            type = index.get(survey[i][1]);
            type.point += points; 
            index.set(survey[i][1], type);
        }
   }

    index = [...index.entries()];

    for(let i = 0; i < index.length; i+=2) {
        if(index[i][1].point >= index[i+1][1].point) {
            answer.push(index[i][0]);
        } else {
            answer.push(index[i+1][0]);
        }
    }
    return answer.join("");
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);