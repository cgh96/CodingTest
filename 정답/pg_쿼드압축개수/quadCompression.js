function solution(arr) {
    let zero = 0;
    let one = 0;

    arr.forEach( elem => {
        zero += elem.filter(elem => elem === 0).length;
    })
    one = arr.length**2 - zero;
    console.log(zero, one)

    function quadCompress(x, y, len) {
        if(len === 1) { return; }
        let check = true;

        for(let i = x; i < x + len; i++) {
            for(let j = y; j < y + len; j++) {
                if(arr[x][y] !== arr[i][j]) {
                    check = false;
                    break;
                } 
            }
        }

        if(check) {
            if(arr[x][y] === 1) {
                one -= (len**2 - 1);
            } else {
                zero -= (len**2 - 1);
            }
            
        } else {
            quadCompress(x, y, len / 2);
            quadCompress(x, y + len / 2, len / 2);
            quadCompress(x + len / 2, y, len / 2);
            quadCompress(x + len / 2, y + len / 2, len / 2);       
        }
        
    }
    quadCompress(0, 0, arr.length);
    return [zero, one]
}

solution([
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1],
    [0,0,0,0,1,1,1,1],
    [0,1,0,0,1,1,1,1],
    [0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0,1],
    [0,0,0,0,1,1,1,1]
])


/**
 * 0 ~ length / 2, 0 ~ length / 2
 * 0, 0, length / 2 첫번째 값 저장. 다른게 나오면 return false;
 * 통과하면 return true;
 * 
 * 0 ~ length / 2, length / 2 ~ length
 * 
 * length / 2 ~ length, 0 ~ length / 2
 * 
 * length / 2 ~ length, length / 2 ~ length
 * 
 */