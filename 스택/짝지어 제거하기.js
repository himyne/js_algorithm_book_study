function solution(s){    
    const stack = [];
    
    for(const value of s) {
        if(value === stack.at(-1)){
            stack.pop();
            continue;
        }
        stack.push(value);
    }
    
    return stack.length === 0 ? 1 : 0
}