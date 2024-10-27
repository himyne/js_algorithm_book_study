function solution(board, moves) {
    // [[3,4], [5,2,2],[1,4,5,1],[3,4],[1,2,1,3]]
    
    const crane = new Array(board.length);
    
    for(let i=board.length -1 ; i>=0; i--){     
        for(let j=0; j<board.length; j++){
            if(!crane[j]) {
                crane[j] = [];
            }
            if(board[i][j] !== 0){
                crane[j].push(board[i][j]);
            }
        }
    }
    
    const stack = [];
    let answer = 0;
    
    for(const index of moves) {
        const curArr = crane[index-1];
        
        const item = curArr.pop();
        
        if(!item) continue;
        
        if(stack[stack.length - 1] === item){
            stack.pop();
            answer++;
        }else {
            stack.push(item);
        }
    }
    
    return answer * 2
}