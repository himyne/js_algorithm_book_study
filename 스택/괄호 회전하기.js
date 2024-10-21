const isCorrectBracket = (str) => {
    const stack = [];
    
    for(const value of str) {                   
        const lastElement = stack.at(-1);
        const bracket = lastElement + value;
        
        if(bracket === '()' || bracket === '{}' || bracket === '[]'){
            stack.pop();
            continue;
        }
        
        stack.push(value);
    }
    return stack.length === 0;
}

function solution(s){
    let answer = 0;
    
    for(let i=0; i<s.length; i++) {
        const cur = s.slice(i) + s.slice(0, i);
        
        if(isCorrectBracket(cur)) {
            answer++;
        }
    }
    
    return answer;
}