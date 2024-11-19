function solution(participant, completion) {
    const hash = {};
    
    let answer = ''
    
    for(const name of completion){
        if(hash[name]) {
            hash[name]++
            continue;
        }
        
        hash[name] = 1
    }
    

    for(const name of participant){
        if(hash[name]){
            hash[name]--;
            continue;
        }
        
        if(!hash[name]) answer = name;
    }
    
    return answer
}