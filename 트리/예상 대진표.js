function solution(n, a, b) {
    let answer = 0;
    
    // a와 b가 같은 번호를 받을 때까지 반복
    while(a != b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer += 1;
    }

    return answer;
}

console.log(solution(8, 4, 7));