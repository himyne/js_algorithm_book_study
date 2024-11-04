function solution(n, k, cmd) {
    // 1. n개만큼 각 인덱스 숫자를 원소로 하는 배열을 만든다.
    // 2. 현재 위치는 변수로 지정한다.
    // 3. 명령어 반복문을 돌면서 명령에 따라 위치를 움직인다.
        // 3-1 D는 +, U는 -
    // 4. 삭제 명령어가 나오면 삭제된 위치와 원소를 2차원 배열의 형태로 임시 스택에 저장한다.
    // 5. z 명령어가 나오면 임시 스택에서 pop을 하고 배열에 원래 위치에 추가한다
    // 6. 임시 스택에서 빠진 원소들의 값을 가져온다.
    // 7. n개의 O를 만들어놓고 빠진 원소들의 배열을 돌면서 빠진 원소만 X로 바꿔준다.
    
    const columns = new Array(n).fill(0).map((_, index) => index);
    
    let cur = k;
   
    const stack = [];
    
    for(const command of cmd) {
        const behavior = command[0];
        const count = Number(command[2]);
        
        if(behavior === 'D') {
            cur += count;
        }
        if(behavior === 'U') {
            cur -= count;
        }
        if(behavior === 'C') {
            stack.push([cur, columns[cur]]);
            columns.splice(cur, 1);
            cur = columns[cur] ? cur : cur-1;
        }
        if(behavior === 'Z') {
            const [index, elem] = stack.pop();
            cur = cur < index ? cur : cur+1;
            columns.splice(index, 0, elem);
        }
    }
    
    const canceled = stack.map(([item, elem]) => elem);
        
    const answer = new Array(n).fill('O');
    
    canceled.forEach((item) => answer[item] = 'X');
    
    return answer.join("");
}

function solution(n, k, cmd) {
    const linkedList = Array.from({ length: n }, (_, index) => ({ prev: index - 1, next: index + 1 }));
    linkedList[0].prev = null;
    linkedList[n - 1].next = null;

    let cur = k;
    const stack = [];
    
    for (const command of cmd) {
        const [behavior, count] = command.split(" ");
        
        if (behavior === 'D') {
            for (let i = 0; i < Number(count); i++) cur = linkedList[cur].next;
        }
        
        if (behavior === 'U') {
            for (let i = 0; i < Number(count); i++) cur = linkedList[cur].prev;
        }
        
        if (behavior === 'C') {
            stack.push(cur);
            const prevNode = linkedList[cur].prev;
            const nextNode = linkedList[cur].next;

            if (prevNode !== null) linkedList[prevNode].next = nextNode;
            if (nextNode !== null) linkedList[nextNode].prev = prevNode;

            cur = nextNode !== null ? nextNode : prevNode;
        }
        
        if (behavior === 'Z') {
            const last = stack.pop();
            const prevNode = linkedList[last].prev;
            const nextNode = linkedList[last].next;

            if (prevNode !== null) linkedList[prevNode].next = last;
            if (nextNode !== null) linkedList[nextNode].prev = last;
        }
    }

    const answer = Array(n).fill('O');
    stack.forEach((index) => (answer[index] = 'X'));
    
    return answer.join("");
}