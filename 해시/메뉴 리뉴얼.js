function solution(orders, course) {
    const map = new Map;
    const result = [];
    
    orders.forEach((order) => {
        for(let i=2; i<=order.length; i++){
            const combis = combination(order.split(''), i);
        
            combis.forEach((combi) => {
                const key = combi.sort().join('');
                map.set(key, map.get(key) + 1 || 1);
            })
        }
    });

    const courseMax = {};
    
    course.forEach((number) => {
        let max = 0;
        
        map.forEach((value, key) => {
            if(key.length === number) {
                max = Math.max(max, value);
            }
        })
        if(max >= 2) {
            courseMax[number] = max;
        }
    })
    
    map.forEach((value, key) => {
        if(courseMax[key.length] === value){
            result.push(key);
        }
    })
    
    return result.sort();
}

const combination = (arr, n) => {
    if(n === 1) return arr.map((v) => [v]);
    
    const result = [];
    
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1);
        
        const combis = combination(rest, n-1);
        
        const combine = combis.map((v) => [fixed, ...v]);
        
        result.push(...combine);
    })
    
    return result;
}