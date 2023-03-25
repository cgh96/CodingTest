class MinHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    _swap(a, b) { // 배열의 요소를 swap하는 함수 작성
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        // `this.heap[parentIndex].cost`, `value.cost`를 통해
        // 간선의 값으로 비교하도록 수정한다.
        while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
            this._swap(parentIndex, currentIndex) // 편의를 위해 별도로 _swap 함수를 구현했다.

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        if (this.isEmpty()) return; // 예외 로직
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
    
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
    
        let currentIndex  = 1;
        let leftIndex = 2;
        let rightIndex = 3;
    
        // 비교하는 부분에 전부 `.cost`를 붙여줍니다.
        // 그리고 실제로 왼쪽, 오른쪽에 값이 있는지 체크하는 조건을 추가합니다.
        while ((this.heap[leftIndex] && this.heap[currentIndex].cost > this.heap[leftIndex].cost) || 
                (this.heap[rightIndex] && this.heap[currentIndex].cost > this.heap[rightIndex].cost)) {
            if (this.heap[leftIndex] === undefined) { // 왼쪽 정점이 없을 경우
                this._swap(rightIndex, currentIndex)
            } else if (this.heap[rightIndex] === undefined) { // 오른쪽 정점이 없을 경우
                this._swap(leftIndex, currentIndex)
            } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
                this._swap(rightIndex, currentIndex)
            } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
                this._swap(leftIndex, currentIndex)
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
    
        return returnValue;
    }
}

function dijkstra(road, N) {
    const heap = new MinHeap();
    heap.push({ node: 1, cost: 0 });

    const dist = [...Array(N + 1)].map( () => Infinity);
    dist[1] = 0;

    while(!heap.isEmpty()) {
        const { node: current, cost: currentCost} = heap.pop();

        for(const [src, dest, cost] of road) {
            const nextCost = cost + currentCost;

            if(src === current && nextCost < dist[dest]) {
                dist[dest] = nextCost;
                heap.push({ node: dest, cost: nextCost });
            } else if(dest === current && nextCost < dist[src]) {
                dist[src] = nextCost;
                heap.push({ node: src, cost: nextCost});
            }
        }
    }
    return dist;
}


function solution(N, road, K) {
    var answer = 0;
    let dist = dijkstra(N, road);
    return answer = dist.filter(elem => elem <= K).length;
}

solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3);