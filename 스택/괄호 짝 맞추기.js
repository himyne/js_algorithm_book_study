function solution (s) {
    let left = 0;
    let right = 0;

    // 1. 왼쪽 괄호개수보다 오른쪽이 많아지면 false
    // 2. 왼쪽 괄호와 오른쪽 괄호 개수가 다르면 false
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '('){
            left++;
        }
        if(s[i] === ')'){
            right++;
        }
        if(left < right) {
            return false;
        }
    }
    return left !== right ? false : true
}

console.log(solution("(())()"))
console.log(solution("((())()"))
console.log(solution('(())())'))
console.log(solution('(((()())()'))
console.log(solution('(()())((()))'))
console.log(solution('((()()(()))(((())))()'))
console.log(solution('()()()()(()()())()'))
console.log(solution('(()((())()('))

function stackSolution (s) {
    const stack = [];

    for(let i=0; i<s.length; i++) {
        stack.push(s[i]);
        if(stack.at(-1) === ")" && stack.at(-2) === '('){
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}

