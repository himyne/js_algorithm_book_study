function solution(numbers) {
    // 시간 복잡도: O(N^2)도 최대 10,000(만)개이기 때문에 가능할 것 같다.
    // 1. 배열 순서대로 반복문을 돈다.
    // 2. 자기 자신의 인덱스보다 뒤에 있는 원소들의 조합을 모두 구한다.
    // 3. 반복되는 숫자를 제거하여 반환한다.
   
    const result = new Set();
    
    for(let i=0; i < numbers.length; i++) {
        for(let j=i; j < numbers.length-1; j++) {
            const sum = numbers[i] + numbers[j + 1];
            result.add(sum);
        }
    }
    return [...result].sort((a, b) => a-b);
}