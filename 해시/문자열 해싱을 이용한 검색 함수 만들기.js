const hash = (s) => {
    let returnValue = 0;
    const p = 31;
    const m = 1000000007;

    for (let i = 0; i < s.length; i++) {
        returnValue = (returnValue * p + s.charCodeAt(i)) % m;
    }

    return returnValue;
}

function solution (stringList, queryList) {

    const hashList = stringList.map((string) => hash(string));

    const answer = [];

    for(let i=0; i < queryList.length; i++) {
        const query = queryList[i];

        const key = hash(query);
        
        if(hashList.includes(key)) {
            answer[i] = true;
            continue;
        }

        answer[i] = false;
    }

    return answer;
}

console.log(solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']))