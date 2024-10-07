function solution(answers) {    
    const scores = [0,0,0]
    
    const methods = {
        1: [1,2,3,4,5],
        2: [2,1,2,3,2,4,2,5],
        3: [3,3,1,1,2,2,4,4,5,5]
    };
    
    for(let i=1; i<=3; i++) {
        const len = methods[i].length;
        answers.forEach((answer, index) => {
            if(answer === methods[i][index%len]) {
                scores[i-1]++;
            }
        })
    }
                        
    const max = Math.max(...scores);
    
    const result = [];
    
    scores.forEach((score, index) => {
        if(score === max) result.push(index+1)
    })
    
    return result
}