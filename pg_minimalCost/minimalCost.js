class Heap {
    constructor() {
        this.heap = [null];
    }

    push(value) {   
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);


        while(parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex =3;

        while( 
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]   
        ) {
            if(this.heap[leftIndex] < this.heap[rightIndex]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            } else {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    }
}

function solution(no, works) {
    var result = 0;
    const heap = new Heap();
    let temp;

    for(let i of works) {
        heap.push(i);
    }
    while(no > 0) {
        temp = heap.pop();
        temp--;
        no--;
        heap.push(temp);
    }

    for(let i = 1; i < heap.heap.length; i++) {
        result += heap.heap[i] ** 2;
    }

    return result;
}

solution(4, [4, 3, 3]);