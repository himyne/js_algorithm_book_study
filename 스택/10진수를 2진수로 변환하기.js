function solution(decimal) {
    const stack = [];

    while(decimal !== 0) {
        if(decimal === 1) {
            stack.push(decimal);
            break;
        }
        stack.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }

    return Number(stack.reverse().join(''));
}

console.log(solution(10))
console.log(solution(27))
console.log(solution(12345))