// O(N^2) 풀이
function solution(prices) {
    // 1. 반복을 돌면서 스택의 마지막 값이 현재 넣을 값보다 크거나 같은 경우에만 집어넣는다.
        // 1-1. 현재 인덱스의 하위 인덱스의 카운트를 모두 증가시킨다.
    // 2. 만약 현재 넣을 값이 더 작은 값이면 마지막 원소보다 크거나 같은 값이 될 때까지 pop을 하여 원소를 빼낸다.
    const stack = [];
    const answer = [];
    
    prices.forEach((price, index) => {
        answer.push(prices.length - 1 - index);
    });
    
    const logs = [];
    
    for(let i = 0; i<prices.length; i++) {
        const price = prices[i];
        
        const lastElem = stack[stack.length - 1] ?? 0;
        
        if(lastElem <= price) {
            stack.push(price);
        } else {
            let temp = 0;
            while(true){
                const lastElem = stack[stack.length - 1];
                if(lastElem <= price) break;
                stack.pop();
                temp++;
            }
            logs.push([i, temp]);
        }
    }
    
    for(const [index, count] of logs) {
        for(let i=index-count; i<index; i++) {
            answer[i]--;
        }
    }
    
    return answer;
}

// O(N) 풀이
function solution(prices) {
    const answer = [];
    
    const stack = [0];
    
    for(let i=1; i<prices.length; i++) {
        while(prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop();
        
            answer[j] = i - j;
        }
        stack.push(i)
    }
    
    while(stack.length > 0) {
        const j = stack.pop();
        answer[j] = prices.length - 1 - j;
    }
    
    return answer;
}