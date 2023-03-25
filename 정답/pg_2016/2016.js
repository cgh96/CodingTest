function solution(a, b) {
    let week = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ];
    let day = b - 1;
    let month = 0;

    for(let i = 1; i < a; i++) {
        if(i == 2) {
            month += 29;
        } else if ([1, 3, 5, 7, 8, 10, 12].find(elem => elem == i)) {
            month += 31;
        } else if([4, 6, 9, 11].find(elem => elem === i)){
            month += 30;
        }
    }

    month += day;
    month %= 7;
    return week[(month + 5) % 7];
}

solution(11, 30);

//2월 => 29일
//8월, 12월 => 31일
// 1 3 5 7 8 9 11 12
// 4 6 10 