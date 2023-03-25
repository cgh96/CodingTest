function solution(fees, records) {
    const BASIC_FEE = fees[1];
    const BASIC_HOURS = fees[0];
    const ADDED_MIN = fees[2];
    const ADDED_MONEY = fees[3];
    const CLOSED_TIME = Math.floor(new Date(`1970-01-01GMT23:59`).getTime() / 60000 );
    let answer = [];

    let parkingLot = new Map();
    
    records = records.map( elem => {
        elem = elem.split(" ");
        elem[0] = Math.floor(new Date(`1970-01-01GMT${elem[0]}`).getTime() / 60000);
        if(!parkingLot.get(elem[1])) { 
            elem[2] === "IN" ? parkingLot.set(elem[1], -elem[0])
            : parkingLot.set(elem[1], elem[0]);
        } else {
            elem[2] === "IN" 
            ? parkingLot.set(elem[1], parkingLot.get(elem[1]) - elem[0] )
            : parkingLot.set(elem[1], parkingLot.get(elem[1]) + elem[0] );
        }
    });

    for(let item of parkingLot){
        item[1] += item[1] <= 0 ? CLOSED_TIME : 0;
        item[1] = Math.ceil( (item[1] - BASIC_HOURS) / ADDED_MIN ) * ADDED_MONEY + BASIC_FEE;
        item[1] = item[1] < BASIC_FEE ? BASIC_FEE : item[1];
        answer.push(item);
    }

    answer = answer.sort( (a, b) => a[0] - b[0])
    .map(elem => elem[1]);
    
    return answer;
}

solution([1, 461, 1, 10], ["00:00 1234 IN"]);

//기본시간 기본요금 단위시간 단위요금
//시간 차번호 입출차

/**
 1. 시간 계산
 환산시간 => 동일 차량의  OUT시간 * 60 + Out분 - (IN시간 * 60  + IN분)
    
 if not (OUT시간) => 23:59

 2. 요금 계산 
 => Math.ceil( (환산 시간 - fees[0]) / fees[2] ) * fees[3] + fees[1]
*/

/**
car가 stack에 없으면? push.
있으면 시간계산, 요금계산 => pop

마지막에 stack에 있으면 23:59 - 분
 */