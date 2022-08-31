function solution(dartResult) {
    let areaPrize = dartResult.split(/[0-9]+/);
    let points = dartResult.split(/[^0-9]+/);
    points.pop();
    areaPrize.shift();
    let table = [];
    let answer;

    points.forEach(
        (elem, idx) => {
            if(areaPrize[idx].includes("S")) {
                elem = elem ** 1;
            }else if(areaPrize[idx].includes("D")) {
                elem = elem ** 2;
            } else if(areaPrize[idx].includes("T")) {
                elem = elem ** 3;
            }

            if(areaPrize[idx].includes("#")) {
                elem *= -1;
            } else if(areaPrize[idx].includes("*")) {
                if(idx === 0) {
                    elem *= 2;
                } else {
                    table[idx - 1] *= 2;
                    elem *= 2;
                }
            }
            table.push(elem);
        }
    );

    answer = table.reduce( (acc, cur) => acc + cur );
    console.log(answer);
    return answer;
}

solution("1D2S#10S");

// S D T
// 1제곱 2제곱 3제곱
//*: 스타상, 해당 점수 및 이전 점수 두 배
//#: 아차상, 해당 점수 마이너스

// 점수 | 보너스 | 옵션