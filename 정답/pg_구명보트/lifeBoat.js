function solution(people, limit) {
    let ships = 0;
    let start = 0;
    let end = people.length - 1;
    people = people.sort( (a, b) => a - b);

    while(start <= end) {
        if(people[end] + people[start] > limit) {
            ships++;
            end--;
        } else {
            start++;
            end--;
            ships++;
        }
    }
    return ships;
}

solution([70, 50, 80, 50], 100);
//40 50 60 70 80 90 100   200
//80 70 50           100