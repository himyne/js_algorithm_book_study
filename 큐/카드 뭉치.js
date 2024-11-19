class CustomQueue {
    constructor(items, front, rear) {
        this.items = items ?? [];
        this.front = front ?? 0;
        this.rear = rear ?? 0;
    }
    
    push(data) {
        this.items.push(data);
        this.rear++;
    }
    
    pop() {
        if(this.front === this.rear) return null;
        
        const removedItem = this.items[this.front++];
        return removedItem
    }
    
    frontData () {
        return this.items[this.front];
    }
}

function solution(cards1, cards2, goal) {
    const goalQueue = new CustomQueue(goal, 0, goal.length);
    const cards1Queue = new CustomQueue(cards1, 0, cards1.length);
    const cards2Queue = new CustomQueue(cards2, 0, cards2.length);
    
    for(let i=0; i<goal.length; i++) {
        if (goalQueue.frontData() === cards1Queue.frontData()) {
            cards1Queue.pop();
            goalQueue.pop()
        } else if(goalQueue.frontData() === cards2Queue.frontData()) {
            cards2Queue.pop();
            goalQueue.pop()
        } else {
            return 'No'
        }
    }
    return 'Yes'
}