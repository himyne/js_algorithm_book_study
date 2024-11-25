function solution(want, number, discount) {
    let answer = 0;
    
    let hash = {};
    
    want.forEach((food, index) => {
        hash[food] = number[index];
    })
    
    for(let i=0; i<=discount.length - 10; i++){    
        let hashCopy = {...hash};

        for(let j=0; j<10; j++) {
            const food = discount[i + j];

            if(hashCopy[food]) hashCopy[food]--;
        }
        
        if(Object.values(hashCopy).every((value) => value <= 0)) answer++;
    }
    
    return answer;    
}