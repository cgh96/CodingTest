function solution(n, lost, reserve) {
    lost = lost.sort( (a, b) => a - b);
    reserve = reserve.sort( (a, b) => a - b);

    let realLost = lost.filter(elem => !reserve.includes(elem));
    let realReserve = reserve.filter(elem => !lost.includes(elem));


    realLost.forEach(elem => {
        if(realReserve.includes(elem - 1)) {
            realReserve = realReserve.filter(r => r !== elem - 1);
        } else if(realReserve.includes(elem + 1)) {
            realReserve=realReserve.filter(r => r !== elem + 1);
        }else {
            n--;
        }
    })
    return n;
}

solution(7, [2, 3, 4, 6], [3, 7]);

//2,  6,  9 11
//1, 5, 7, 10

//lost + 1, lost - 1이 reserve에 있는가?
//있으면 pass
//없으면  n--