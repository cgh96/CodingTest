function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []); //1번부터 n번까지 시작, 0은 비워둠.

    for(const [src, dest] of edge) { //graph작성
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;


    //BFS
    const queue = [1];
    while(queue.length > 0) {
        const src = queue.shift(); //shift는 O(n)이지만 요소가 적을 경우 js엔진에서 최적화 해줌.
        for(const dest of graph[src]) {
            if(distance[dest] === 0) {
                queue.push(dest);
                distance[dest]  = distance[src] + 1;
            }
        }
    }
    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;
}

solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);