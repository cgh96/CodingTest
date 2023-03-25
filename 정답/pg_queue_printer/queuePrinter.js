class Queue {
    constructor(arr) {
        this.queue = [...arr];
        this.front = 0;
        this.rear = arr.length;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

function checkPriority(q) {
    for(let elem of q.queue) {
        if(q.peek() < elem) {
            return true;
        }
    }
    return false;
}

function solution(priorities, location) {
    let priorArr = new Queue(priorities);
    let answer = 0;

    while(priorArr.size() >= 0) {
        if(checkPriority(priorArr)) {
            priorArr.enqueue(priorArr.dequeue());
            if(location == 0) {
                location = priorArr.size() - 1;
            } else {
                location--;
            }
        } else {
            priorArr.dequeue();
            answer++;
            if(location == 0) {
                break;
            }
            location--;
        }
    }
    return answer;
}

solution([1,1,9,1,1,1], 0);