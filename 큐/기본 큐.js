class Queue1 {
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

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue2 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push (data) {
        const newNode = new Node(data);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = data;
            this.tail = data;
        }

        this.size++;
    }

    pop () {
        if(!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;

        // head의 다음값이 없다면 큐가 빈 것이니 tail도 null로 설정
        if(!this.head) {
            this.tail = null;
        }

        this.size--;

        return removedNode.data;
    }

    isEmpty () {
        return this.size === 0
    }
}