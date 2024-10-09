function solution(N, stages) {
    // 시간 복잡도: 최대 20만개 => nlogn까지는 가능할듯!
    // 1. N만큼 반복문을 돈다.
    // 2. 실패율을 효율적으로 계산하기 위해 stages 배열을 초기에 정렬해둔다.
    // 3. 스테이지 별로 실패율을 계산하여 스테이지와 함께 2차원 배열에 저장한다.
    // 4. 실패율이 저장된 배열에서 실패율에 따라 정렬한다.
    // 5. 2차월 배열에서 첫번째 값만 리턴한다.
    
    const failureRates = [];
    
    const copyStages = [...stages].sort((a, b) => a - b);
        
    for(let i=1; i<=N; i++) {
        let failureCount = 0;
        
        for(let j=0; j<copyStages.length; j++) {
            if(copyStages[j] === i){
                failureCount++;
            }
        }
        
        failureRates.push([i, failureCount / copyStages.length])
        copyStages.splice(0, failureCount);
    }
    
    failureRates.sort((a, b) => b[1] - a[1]);
    
    return failureRates.map((rates) => rates[0]);
}