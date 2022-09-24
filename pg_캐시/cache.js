function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    if(cacheSize === 0) return cities.length * 5;

    cities = cities.map(elem => elem.toLowerCase());
    for(let city of cities) {
       if( cache.includes(city) ) {
            time++;
            let ct = cache[cache.indexOf(city)];
            cache.splice(cache.indexOf(city), 1);
            cache.push(ct);
       } else {
            time+=5;
            if(cache.length >= cacheSize) {
                cache.shift();
                cache.push(city);
            } else {
                cache.push(city);
            }
       }
    }
    return time;
}
//1 2 3          3
solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]);

//cache hit = 1
//cache miss = 5

//cache에 찾는게 있는 경우
//1. cache가 꽉차지 않은 경우 => continue
//2. cache가 꽉 찬 경우  => 찾은 것을 뒤로 보낸다.

//cache에 찾는게 없는 경우
//1. cache가 꽉 차지 않은 경우  => 새로운 거 삽입
//2. cache가 꽉 찬 경우 => 앞에 거 삭제. 뒤에 새로운 거 삽입.