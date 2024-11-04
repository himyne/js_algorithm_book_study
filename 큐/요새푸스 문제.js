// 5,4,3,2,1 
// 1,5,4,3 
// 3,1,5
// 5,3 

class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(data) {
        this.items.push(data);
        this.rear++;
    }

    pop() {
        return this.items[this.front++];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

function solution (N,K) {
    const queue = new Queue();

    let answer;

    for(let i=1; i<=N; i++) {
        queue.push(i);
    }

    while(!queue.isEmpty()){
        for(let i=0; i<K-1; i++){
            const removedItem = queue.pop();
            queue.push(removedItem);
        }
        answer = queue.pop();
    }

    return answer;
}

console.log(solution(5, 2))
console.log(solution(5, 3))
