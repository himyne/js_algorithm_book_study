function solution(progresses, speeds) {
    // progresses 배열을 큐로 본다.
    // 93은 큐의 head, 100이 될때까지 반복하면 7번 반복한다.
    // 7번 반복하면서 진행률은 [100, 100, 90] 이렇게 되어있다.
    // 큐의 head가 100이라면 while문을 돌며 모두 꺼낸다. 개수도 카운트해서 정답 배열에 넣어놓는다.
    const answer = [];
    
    const queue = [...progresses]
    
    while(queue.length !== 0) {
        if(!queue.length) break;
        
        const head = queue[0];
        const repeatNumber = Math.ceil((100 - head) / speeds[0]);
        
        for(let i=0; i<queue.length; i++){
            queue[i] += speeds[i] * repeatNumber;
        }
        
        if(queue[0] && queue[0] >= 100) {
            let count = 0;
            
            while(queue[0] >= 100){
                queue.shift();
                speeds.shift();
                count++;
            }
            answer.push(count);
        }
    }
    
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]))

class CustomQueue {
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
    
    size () {
        return this.rear - this.front;
    }
}

function solution2(progresses, speeds) {    
    // 큐의 head가 100이라면 while문을 돌며 모두 꺼낸다. 개수도 카운트해서 정답 배열에 넣어놓는다.

    const answer = [];
    
    const queue = new CustomQueue();
    
    // progresses 배열을 큐에 넣는다.
    for(const progress of progresses){
        queue.push(progress);
    }

    while(queue.size() !== 0) {
        // 93은 큐의 head, 100이 될때까지 반복하면 7번 반복한다.
        const frontData = queue.items[queue.front] // 큐의 헤드
        const day = Math.ceil((100 - frontData) / speeds[queue.front]); // 큐의 헤드의 작업률이 100이 되려면 필요한 날짜
        
        // 큐에 남은 작업에 모두 작업률을 더한다.
        for(let i=queue.front; i<progresses.length; i++){
            queue.items[i] += speeds[i] * day;
        }

        let count = 0;
        
        // 작업률이 100이 넘는 원소들은 모두 팝한다.
        while(queue.items[queue.front] >= 100){
            queue.pop();
            count++;
        }
        
        answer.push(count);
    }
    
    return answer;
}