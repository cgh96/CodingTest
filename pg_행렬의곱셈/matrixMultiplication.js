function solution(arr1, arr2) {
    let answer = [];
    let tmp = [];
    let tval = 0;
    
    for(let k = 0; k < arr1.length; k++) {
        for(let i = 0; i < arr2[0].length; i++) {
            for(let j = 0; j < arr1[0].length; j++) {
                tval += arr1[k][j] * arr2[j][i];
            }
            tmp.push(tval);
            tval = 0;
            if(tmp.length === arr2[0].length) { 
                answer.push([...tmp]); 
                tmp = []; 
            }
        }
    }
    return answer;
}

solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]);

//1 4               3   3   3
//3 2               3   3   3 
//4 1           
//
//c[0][0] = a[0][0] * b[0][0] + a[0][1] * b[1][0]
//c[0][1] = a[0][0] * b[0][1] + a[0][1] * b[1][1]
//c[0][2] = a[0][0] * b[0][2] + a[0][1] * b[1][2] 
//
//
//c[1][0] = a[1][0] * b[0][0] + a[1][1] * b[1][1] 
//c[1][1]
//c[1][2]
//

//c[2][0]
//c[2][1]
//c[2][2]